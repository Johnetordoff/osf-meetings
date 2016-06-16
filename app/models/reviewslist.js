import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  conference: attr('string'),
  reviewdeadline: attr('string'),
  reviewer: attr('string'),
  status: attr('string')
  });