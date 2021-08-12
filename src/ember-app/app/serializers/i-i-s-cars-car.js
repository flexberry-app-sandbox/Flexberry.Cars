import { Serializer as CarSerializer } from
  '../mixins/regenerated/serializers/i-i-s-cars-car';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(CarSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});