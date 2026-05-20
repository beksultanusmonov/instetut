import QuizHome from '../components/QuizHome';
import { PUBLIC_QUIZ_CARDS } from '../config/quizCards';

function Home() {
  return (
    <QuizHome
      cards={PUBLIC_QUIZ_CARDS}
      selectBasePath="/test/select"
      title="Mavjud Testlar"
      subtitle="O'zingizga mos testni tanlang"
    />
  );
}

export default Home;
