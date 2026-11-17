# Student Records API — MongoDB Community Edition

## How to Run (Step by Step)

### Step 1 — Start MongoDB
Double-click **start-mongo.bat** in this folder.
This starts MongoDB without needing Admin rights.

### Step 2 — Open in VS Code
File > Open Folder > select this folder

### Step 3 — Install packages
In VS Code terminal (Ctrl + backtick):
```
npm install
```

### Step 4 — Run the server
```
npm start
```

You should see:
```
Server running at http://localhost:5000
Connected to MongoDB Community Edition - studentDB
```

## API Endpoints to Test (Thunder Client)

| Method | URL |
|--------|-----|
| GET    | http://localhost:5000/ |
| GET    | http://localhost:5000/api/students |
| POST   | http://localhost:5000/api/students |
| GET    | http://localhost:5000/api/students/RA001 |
| PUT    | http://localhost:5000/api/students/RA001 |
| DELETE | http://localhost:5000/api/students/RA001 |

## POST Body Example
```json
{
  "studentId": "RA001",
  "name": "Priya Sharma",
  "email": "priya@university.ac.in",
  "department": "CSE",
  "year": 2,
  "courses": [
    { "courseCode": "CS301", "courseName": "Database Systems", "grade": "A+", "credits": 4 },
    { "courseCode": "CS302", "courseName": "Web Technologies", "grade": "O",  "credits": 3 }
  ]
}
```
