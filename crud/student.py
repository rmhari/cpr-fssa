from sqlalchemy.orm import Session
from uuid import UUID
# from .. import models, schemas
# from .. import schemas
import models
from schemas import student as schemas



def get_all_students(db: Session):
    return db.query(models.Student).all()


def get_student_by_id(db: Session, student_id: UUID):
    return db.query(models.Student).filter(models.Student.id == student_id).first()


def create_student(db: Session, student: schemas.StudentCreate):
    db_student = models.Student(**student.dict())
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student


def update_student(db: Session, student_id: UUID, student: schemas.StudentUpdate):
    db_student = get_student_by_id(db, student_id)
    if db_student:
        for key, value in student.dict(exclude_unset=True).items():
            setattr(db_student, key, value)
        db.commit()
        db.refresh(db_student)
    return db_student


def delete_student(db: Session, student_id: UUID):
    db_student = get_student_by_id(db, student_id)
    if db_student:
        db.delete(db_student)
        db.commit()
    return db_student
