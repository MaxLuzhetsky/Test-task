import CoursesList from "../components/CoursesList/CoursesList";
import Header from "../components/Header/Header";

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="home-page__container">
        <div className="home-page__header">
          <h1 className="home-page__title">Welcome to Your Learning Hub 🎓</h1>
          <p className="home-page__subtitle">
            Discover courses designed to help you grow, improve your skills, and
            reach new goals. Whether you're just starting out or advancing your
            career, we’ve got something for you!
          </p>
        </div>
        <CoursesList />
      </div>
    </div>
  );
};

export default HomePage;
