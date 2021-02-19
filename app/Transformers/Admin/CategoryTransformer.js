'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')
const ImageTransformer = use('App/Transformers/Admin/ImageTransformer')

/**
 * CategoryTransformer class
 *
 * @class CategoryTransformer
 * @constructor
 */
class CategoryTransformer extends BumblebeeTransformer {

  // pega os includes e atrela os valores ao objeto
  defaultInclude(){
    return ['image']
  }

  
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
     id: model.id,
     title: model.title,
     description: model.description
    }
  }

  includeImage(model){
    return this.item(model.getRelated('image'), ImageTransformer)
  }

  
}

module.exports = CategoryTransformer
