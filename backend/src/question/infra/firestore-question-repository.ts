import admin from 'firebase-admin';
import { QuestionDTO } from '../question-dto';
import { QuestionRepository } from '../question-repository';

export const createFirestoreQuestionRepository = ({
  firestore,
}: {
  firestore: admin.firestore.Firestore;
}): QuestionRepository => {
  const converter = {
    toFirestore: (data: QuestionDTO) => data,
    fromFirestore: (snapshot: admin.firestore.QueryDocumentSnapshot) => snapshot.data() as QuestionDTO,
  };

  const questionCollection = firestore.collection('Questions').withConverter(converter);

  return {
    async getAll() {
      const questionQuerySnapshot = await questionCollection.get();

      return questionQuerySnapshot.docs.map((d) => d.data());
    },
  };
};
