//getInstance获得单例
var getInstance() {
	var instance;
	return function () {
		if(!instance) {
			instance = new Person();
		}
		return instance;
	}
}