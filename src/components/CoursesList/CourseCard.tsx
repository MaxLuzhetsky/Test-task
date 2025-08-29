import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Course } from "../../types";
import { purchase } from "../../store/coursesSlice";
import { markCompleted, setProgress } from "../../store/videoSlice";
import type { AppDispatch, RootState } from "../../store";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

const CourseCard: React.FC<Course> = ({
  id,
  title,
  description,
  videoUrl,
  price,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const courses = useSelector((state: RootState) => state.courses.courses);

  const handlePurchase = () => {
    if (courses.includes(id)) {
      toast.error("You already purchased this course");
    } else {
      dispatch(purchase(id));
      toast.success("You successfully purchased a course!");
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        videoUrl={videoUrl}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <video
          src={videoUrl}
          controls
          autoPlay
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
          onTimeUpdate={(e) => {
            const currentTime = (e.target as HTMLVideoElement).currentTime;
            dispatch(setProgress({ id, time: currentTime }));
          }}
          onEnded={() => {
            dispatch(markCompleted(id));
          }}
        >
          Your browser does not support the video tag.
        </video>
      </Modal>
      <div
        style={{
          flex: "0 0 300px",
          maxWidth: "350px",
          maxHeight: "400px",
          margin: "0 10px 20px 10px",
          padding: "15px",
          boxSizing: "border-box",
          border: "1px solid #ccc",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          cursor: "pointer",
          transition: "all 0.3s ease",
          boxShadow: isHovered
            ? "0 4px 12px rgba(0,0,0,0.15)"
            : "0 2px 6px rgba(0,0,0,0.05)",
          transform: isHovered ? "translateY(-5px)" : "translateY(0)",
          borderColor: isHovered ? "#007bff" : "#ccc",
        }}
        onClick={() => {
          setIsOpen(true);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>{title}</h3>
          <span style={{ fontSize: 20, fontWeight: 600 }}>{price}</span>
        </div>
        <p>{description}</p>
        <Button title="Purchase" styles="main" handleClick={handlePurchase} />
      </div>
    </>
  );
};

export default CourseCard;
