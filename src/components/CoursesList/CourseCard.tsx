import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Course } from "../../types";
import { purchase, remove } from "../../store/coursesSlice";
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

  const handleCancelPurchase = () => {
    if (courses.includes(id)) {
      dispatch(remove(id));
      toast.success("You successfully canceled a purchase!");
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
          className="course-card__video"
          src={videoUrl}
          controls
          autoPlay
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
        className={`course-card ${courses.includes(id) ? "purchased" : ""}`}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="course-card__header">
          <h3>{title}</h3>
          <span className="course-card__price">{price}</span>
        </div>
        <p>{description}</p>
        <div className="course-card__actions">
          <Button title="Purchase" styles="main" handleClick={handlePurchase} />
          {courses.includes(id) && (
            <Button
              title="&times; Cancel"
              styles="cancel"
              handleClick={handleCancelPurchase}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default CourseCard;
