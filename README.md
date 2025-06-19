
---

# 📋 CPR System – FastAPI Backend

A simple **Conversation Progress Report (CPR) System** built using **FastAPI** (backend), **PostgreSQL on Supabase** (database), and a plain HTML/CSS frontend (in development). This backend API supports basic CRUD operations for CPR entries.

---

## 🚀 Tech Stack

* **Backend:** FastAPI, SQLAlchemy
* **Database:** PostgreSQL (hosted on Supabase)
* **Environment Management:** Python-dotenv
* **ORM:** SQLAlchemy

---

## 📁 Project Structure

```
/cpr-backend
│
├── main.py               # FastAPI App Entry Point
├── database.py           # DB Connection (Supabase)
├── models.py             # SQLAlchemy Models
├── schemas.py            # Pydantic Schemas
├── crud.py               # CRUD Operations
├── routers/
│   └── cpr.py            # CPR API Routes
├── .env                  # Environment Variables
└── requirements.txt      # Python dependencies
```

---

## ⚙️ Setup & Installation

1. **Clone the repository:**

```bash
git clone <repo-url>
cd cpr-backend
```

2. **Create a virtual environment:**

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install dependencies:**

```bash
pip install -r requirements.txt
```

4. **Set up environment variables:**

Create a `.env` file in the project root:

```
DATABASE_URL=postgresql://<supabase_user>:<password>@<host>:5432/postgres
```

Replace placeholders with your **Supabase database credentials**.

5. **Run the app:**

```bash
uvicorn main:app --reload
```

---

## 🌐 API Endpoints

| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | `/`               | Root - Health Check    |
| POST   | `/cpr/`           | Create new CPR Entry   |
| GET    | `/cpr/`           | Get all CPR Entries    |
| GET    | `/cpr/{entry_id}` | Get CPR Entry by ID    |
| PUT    | `/cpr/{entry_id}` | Update CPR Entry by ID |
| DELETE | `/cpr/{entry_id}` | Delete CPR Entry by ID |

---

## 📝 Example CPR Entry (JSON)

```json
{
  "student_name": "John Doe",
  "coach_name": "Coach Smith",
  "progress_notes": "Improved communication skills",
  "status": "Completed"
}
```

---

## ✅ To Do

* [ ] Build Frontend (HTML/CSS)
* [ ] User Authentication (Admin/Coach)
* [ ] CPR Dashboard with Status Colors
* [ ] CSV Export Feature

---

## 🤝 Contributing

Feel free to fork, raise issues, or submit pull requests.

---

## 📌 License

This project is licensed under the MIT License.

---

