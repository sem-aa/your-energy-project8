import { getExerciseId } from '../services/api';

export function modalExercises() {
  getExerciseId('64f389465ae26083f39b17a2')
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
}
