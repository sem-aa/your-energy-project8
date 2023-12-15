import './partials/to-top';
import './partials/loader';
import './partials/categories';
import './partials/exercises';
import './partials/favorites';
import './partials/sorted-selected';
import './partials/search-params';
import './partials/share-button';
import './partials/subscription';
import './partials/modal-exercises';
import './partials/header';
import './partials/modal-rating';
import { updateRaring } from '../services/api';

updateRaring('64f389465ae26083f39b17a4', {
  rate: 5,
  email: 'test156324@gmail.com',
  review: 'My best exercise',
}).then(data => console.log(data));
