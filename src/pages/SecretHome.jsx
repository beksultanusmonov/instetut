import QuizHome from '../components/QuizHome';
import { SECRET_QUIZ_CARDS } from '../config/quizCards';

function SecretHome() {
  return (
    <QuizHome
      cards={SECRET_QUIZ_CARDS}
      selectBasePath="/secret/test/select"
      title="Maxfiy Testlar"
      subtitle="Maxfiy testlar to'plami"
    />
  );
}

export default SecretHome;
