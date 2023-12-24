import json, csv
from openai import OpenAI

client = OpenAI(
    api_key=""
)

PROMPT = '''
Please clean up the following data that is used to fill a CV in, returning in the same json format.
The skills array should be split it into the categories "Industry Knowledge", "Tools & Technologies" and "Interpersonal Skills" for in the following format:
[
    {
        "skills": [...],
        "category": "..."
    }
    ...
]

In the summary and experience description fields, please add bold tags <b>...</b> surrounding anything that matches one of the skills in the list.
Split the experience description into a json array, split on each newline, and get rid of the bullet points.
Fix any strange unicode characters with regular characters.

'''

output = {
    "experience": [],
    "education": [],
    "awards": [],
    "certifications": [],
    "projects": [],
    "skills": [],
    "summary": None
}


with open("linkedin_export/Positions.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["experience"].append({
            "start": row["Started On"],
            "end": row["Finished On"],
            "company": row["Company Name"] ,
            "title": row["Title"] ,
            "description": row["Description"][4:].replace("\u00e2\u20ac\u00a2 ", "\n"),
        })

with open("linkedin_export/Education.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["education"].append({
            "start": row["Start Date"],
            "end": row["End Date"],
            "title": row["School Name"] ,
            "description": row["Notes"],
        })
        
with open("linkedin_export/Honors.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["awards"].append({
            "date": row["Issued On"],
            "title": row["Title"]
        })

with open("linkedin_export/Certifications.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["certifications"].append({
            "title": row["Name"],
            "issuer": row["Authority"],
            "date": row["Started On"],
            "link": row["Url"]
        })

with open("linkedin_export/Projects.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["projects"].append({
            "title": row["Title"],
            "description": row["Description"],
            "link": row["Url"],
            "date": row["Started On"]
        })

with open("linkedin_export/Skills.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    skills = []
    for row in csv_reader:
        output["skills"].append(row["Name"])

with open("linkedin_export/Profile.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    row = csv_reader.__next__()
    output["summary"] = row["Summary"]

completion = client.chat.completions.create(
    model="gpt-4-1106-preview",
    messages= [{"role": "user", "content": PROMPT + json.dumps(output, indent=4)}],
    response_format={ "type": "json_object" }
)

with open("profile.json", "w") as json_file:
    json_file.write(completion.choices[0].message.content)