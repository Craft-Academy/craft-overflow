import { GenericContainer, Wait } from 'testcontainers';
import admin from 'firebase-admin';
import { createFirestoreQuestionRepository } from '../firestore-question-repository';

describe('firestoreQuestionRepository', () => {
  let firestore: admin.firestore.Firestore;
  beforeAll(async () => {
    const firebaseDotJson = {
      emulators: {
        ui: {
          enabled: false,
        },
        firestore: {
          host: '0.0.0.0',
          port: 8080,
        },
      },
    };
    const projectId = 'demo-craft-overflow';
    const container = await new GenericContainer('andreysenov/firebase-tools')
      .withExposedPorts(firebaseDotJson.emulators.firestore.port)
      .withCopyContentToContainer(JSON.stringify(firebaseDotJson), '/firebase.json')
      .withCmd(['firebase', 'emulators:start', '--project', projectId])
      .withWaitStrategy(Wait.forLogMessage(/all emulators ready/i))
      .start();
    const mappedPort = container.getMappedPort(firebaseDotJson.emulators.firestore.port);
    process.env.FIRESTORE_EMULATOR_HOST = `localhost:${mappedPort}`;
    const firebaseApp = admin.initializeApp({
      projectId,
    });
    firestore = firebaseApp.firestore();
  }, 60000);

  it('can retrieves all questions from firestore', async () => {
    // arrange
    await Promise.all([
      firestore.collection('Questions').doc('id1').set({
        id: 'id1',
        text: 'What is TDD ?',
      }),
      firestore.collection('Questions').doc('id2').set({
        id: 'id2',
        text: 'When can we bypass TDD and use Test-First instead ?',
      }),
    ]);

    const questionRepository = createFirestoreQuestionRepository({ firestore });

    // act
    const questions = await questionRepository.getAll();

    // assert
    expect(questions).toEqual([
      {
        id: 'id1',
        text: 'What is TDD ?',
      },
      {
        id: 'id2',
        text: 'When can we bypass TDD and use Test-First instead ?',
      },
    ]);
  }, 60000);
});
