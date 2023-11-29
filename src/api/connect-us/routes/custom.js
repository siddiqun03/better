module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/connect-us/all',
      handler: 'connect-us.getAll'
    },
    {
      method: 'GET',
 	 path: '/connect-us/count',
	 handler: 'connect-us.getInActive'
    }
  ]
}
