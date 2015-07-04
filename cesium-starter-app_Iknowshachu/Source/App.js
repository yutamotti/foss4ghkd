var viewer = new Cesium.Viewer('cesiumContainer');

// viewer.camera.viewRectangle(Cesium.Rectangle.fromDegrees(114.591, -45.837, 148.970, -5.730));

viewer.dataSources.add(Cesium.KmlDataSource.load('http://yutamotti.github.io/foss4ghkd/cesium-starter-app_Ikowshachu/Source/test1.kml'));