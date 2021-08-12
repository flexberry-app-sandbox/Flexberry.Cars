import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCarsCarLForm from './forms/i-i-s-cars-car-l';
import IISCarsDriverLForm from './forms/i-i-s-cars-driver-l';
import IISCarsCarEForm from './forms/i-i-s-cars-car-e';
import IISCarsDriverEForm from './forms/i-i-s-cars-driver-e';
import IISCarsCarModel from './models/i-i-s-cars-car';
import IISCarsDriverModel from './models/i-i-s-cars-driver';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-cars-car': IISCarsCarModel,
    'i-i-s-cars-driver': IISCarsDriverModel
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        cars: {
          caption: 'cars',
          title: 'cars',
          'i-i-s-cars-car-l': {
            caption: 'i-i-s-cars-car-l',
            title: 'i-i-s-cars-car-l'
          },
          'i-i-s-cars-driver-l': {
            caption: 'i-i-s-cars-driver-l',
            title: 'i-i-s-cars-driver-l'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-cars-car-l': IISCarsCarLForm,
    'i-i-s-cars-driver-l': IISCarsDriverLForm,
    'i-i-s-cars-car-e': IISCarsCarEForm,
    'i-i-s-cars-driver-e': IISCarsDriverEForm
  },

});

export default translations;
