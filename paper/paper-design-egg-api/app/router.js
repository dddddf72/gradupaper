'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/',controller.manage.home.index)
  router.get('/find', controller.api.find.index)
  router.get('/history',controller.api.history.index)
  router.get('/search', controller.api.search.index)
  router.get('/getNews', controller.api.getNews.index)
  router.get('/getCollect',controller.api.getCollect.index)
  router.get('/getHistory',controller.api.getHistory.index)
  router.get('/bookDetail', controller.api.bookDetail.index)
  router.post('/collect', controller.manage.collect.index)
  router.post('/cancel', controller.manage.collect.cancel)
  router.post('/doAdd', controller.manage.doAdd.index)
  router.post('/delete', controller.manage.delete.index)
  router.post('/change',controller.manage.change.index)
  router.post('/login',controller.api.login.index)
  router.post('/logout',controller.api.logout.index)
  router.post('/addNews',controller.manage.news.index)
  router.post('/cancelNews',controller.manage.news.cancel)
};
