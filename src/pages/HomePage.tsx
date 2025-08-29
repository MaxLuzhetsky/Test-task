import CoursesList from "../components/CoursesList/CoursesList";
import Header from "../components/Header/Header";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <CoursesList />
    </div>
  );
};

export default HomePage;
