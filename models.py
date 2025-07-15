from sqlalchemy import Column, Integer, String, Text, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime, timezone

from sqlalchemy.orm import declarative_base
from database import Base
from sqlalchemy.orm import relationship


class CPREntry(Base):
    __tablename__ = "cpr_entries"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, index=True)
    student_name = Column(String, nullable=False)
    student_id = Column(UUID(as_uuid=True), ForeignKey("students.id"), index=True)
    staff_name = Column(String, nullable=False)
    staff_comments = Column(Text)
    manager_comments = Column(Text)
    idp = Column(Text)  # individual development plan
    color_code = Column(String, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    student = relationship("Student")


class User(Base):
    __tablename__ = "users"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))



class Student(Base):
    __tablename__ = "students"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    student_name = Column(String, nullable=False)
    section = Column(String, nullable=True)
    folder_link = Column(String, nullable=True)  # ✅ new field
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc))

