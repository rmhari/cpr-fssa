from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import text
from uuid import UUID

from database import SessionLocal
from crud import student as crud_student
import schemas

from .auth import get_current_user
import models

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

router = APIRouter(
    prefix="/students",
    tags=["Students"]
)

# ✅ Open (no auth) – ping check
@router.get("/ping")
def ping():
    return {"message": "Router works"}

# ✅ Open (no auth) – db test
@router.get("/debug")
def test_connection(db: Session = Depends(get_db)):
    try:
        result = db.execute(text("SELECT 1"))
        return {"db": "connected"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"DB error: {str(e)}")

# ✅ Secured – get all students
@router.get("/", response_model=list[schemas.StudentResponse])
def get_all_students(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    return crud_student.get_all_students(db)

# ✅ Secured – get student by id
@router.get("/{student_id}", response_model=schemas.StudentResponse)
def get_student(
    student_id: UUID,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    student = crud_student.get_student_by_id(db, student_id)
    if not student:
        raise HTTPException(status_code=404, detail="Student not found")
    return student

# ✅ Secured – create student
@router.post("/", response_model=schemas.StudentResponse)
def create_student(
    student: schemas.StudentCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    return crud_student.create_student(db, student)

# ✅ Secured – update student
@router.put("/{student_id}", response_model=schemas.StudentResponse)
def update_student(
    student_id: UUID,
    student: schemas.StudentUpdate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    updated = crud_student.update_student(db, student_id, student)
    if not updated:
        raise HTTPException(status_code=404, detail="Student not found")
    return updated

# ✅ Secured – delete student
@router.delete("/{student_id}", response_model=schemas.StudentResponse)
def delete_student(
    student_id: UUID,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user)
):
    deleted = crud_student.delete_student(db, student_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Student not found")
    return deleted
