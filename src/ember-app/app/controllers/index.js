import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.cars.caption'),
          title: i18n.t('forms.application.sitemap.cars.title'),
          children: [{
            link: 'i-i-s-cars-car-l',
            caption: i18n.t('forms.application.sitemap.cars.i-i-s-cars-car-l.caption'),
            title: i18n.t('forms.application.sitemap.cars.i-i-s-cars-car-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-cars-driver-l',
            caption: i18n.t('forms.application.sitemap.cars.i-i-s-cars-driver-l.caption'),
            title: i18n.t('forms.application.sitemap.cars.i-i-s-cars-driver-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})