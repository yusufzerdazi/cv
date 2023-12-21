import json, csv

output = {
    "experience": [],
    "education": [],
    "awards": [],
    "certifications": [],
    "projects": [],
    "skills": [],
    "profile": None
}

with open("Positions.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["experience"].append({
            "start": row["Started On"],
            "end": row["Finished On"],
            "company": row["Company Name"] ,
            "title": row["Title"] ,
            "description": row["Description"].replace("• ", "\n"),
        })

with open("Education.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["education"].append({
            "start": row["Start Date"],
            "end": row["End Date"],
            "title": row["School Name"] ,
            "description": row["Notes"],
        })
        
with open("Honors.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["awards"].append({
            "date": row["Issued On"],
            "title": row["Title"]
        })

with open("Certifications.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["certifications"].append({
            "title": row["Name"],
            "issuer": row["Authority"],
            "date": row["Started On"],
            "link": row["Url"]
        })

with open("Projects.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["projects"].append({
            "title": row["Title"],
            "description": row["Description"],
            "link": row["Url"]
        })

with open("Skills.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        output["skills"].append(row["Name"])

with open("Profile.csv") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    row = csv_reader.__next__()
    output["profile"] = row["Summary"]

with open("profile.json", "w") as json_file:
    json_file.write(json.dumps(output, indent=4))