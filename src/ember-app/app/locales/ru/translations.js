import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Cars',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Cars',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Cars',
          title: 'Cars'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        cars: {
          caption: 'Cars',
          title: 'Cars',
          'i-i-s-cars-car-l': {
            caption: 'Car',
            title: ''
          },
          'i-i-s-cars-driver-l': {
            caption: 'Driver',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-cars-car-l': IISCarsCarLForm,
    'i-i-s-cars-driver-l': IISCarsDriverLForm,
    'i-i-s-cars-car-e': IISCarsCarEForm,
    'i-i-s-cars-driver-e': IISCarsDriverEForm
  },

});

export default translations;
