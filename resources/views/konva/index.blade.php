@extends('layouts.app')

@section('content')

    <div id="container"></div>

    <div id="interactive_3d">
        <img src="img/frame_1.png">
    </div>

@stop

@section('scriptBottom')

    <script>
        var width = window.innerWidth;
        var height = window.innerHeight;

        function testFunction() {
            addCanvas();
        }

        function update(activeAnchor) {
            var group = activeAnchor.getParent();

            var topLeft = group.get('.topLeft')[0];
            var topRight = group.get('.topRight')[0];
            var bottomRight = group.get('.bottomRight')[0];
            var bottomLeft = group.get('.bottomLeft')[0];
            var image = group.get('Image')[0];

            var anchorX = activeAnchor.getX();
            var anchorY = activeAnchor.getY();

            // update anchor positions
            switch (activeAnchor.getName()) {
                case 'topLeft':
                    topRight.setY(anchorY);
                    bottomLeft.setX(anchorX);
                    break;
                case 'topRight':
                    topLeft.setY(anchorY);
                    bottomRight.setX(anchorX);
                    break;
                case 'bottomRight':
                    bottomLeft.setY(anchorY);
                    topRight.setX(anchorX);
                    break;
                case 'bottomLeft':
                    bottomRight.setY(anchorY);
                    topLeft.setX(anchorX);
                    break;
            }

            image.position(topLeft.position());

            var width = topRight.getX() - topLeft.getX();
            var height = bottomLeft.getY() - topLeft.getY();
            if (width && height) {
                image.width(width);
                image.height(height);
            }
        }



        var stage = new Konva.Stage({
            container: 'container',
            width: width,
            height: height
        });

        var layer = new Konva.Layer();
        stage.add(layer);

        // darth vader
        var darthVaderImg = new Konva.Image({
            width: 200,
            height: 137,
            name: 'imgs'
        });

        // yoda
        var yodaImg = new Konva.Image({
            width: 93,
            height: 104,
            name: 'imgs'
        });

        var darthVaderGroup = new Konva.Group({
            x: 180,
            y: 50,
            draggable: true,
            id: 'test1',
            name: 'Imgs'
        });

        var num = 0;

        function addCanvas() {
            var test = new Konva.Group({
                x: 200,
                y: 100,
                draggable: true
            });

            var testImg = new Konva.Image({
                width: 93,
                height: 104
            });

            layer.add(test);
            test.add(testImg);
            console.log('test');

            var imageObjs = new Image();
            imageObjs.onload = function() {
                testImg.image(imageObjs);
                layer.draw();
            };
            imageObjs.src = 'https://maths-made-easy-9hfyw8h.netdna-ssl.com/wp-content/uploads/mme_ads_uploads/test2.png';
        }

        layer.add(darthVaderGroup);
        darthVaderGroup.add(darthVaderImg);

        var yodaGroup = new Konva.Group({
            x: 20,
            y: 110,
            draggable: true,
            id: 'Imgs',
        });
        layer.add(yodaGroup);
        yodaGroup.add(yodaImg);

        var imageObj1 = new Image();

        imageObj1.onload = function() {
            darthVaderImg.image(imageObj1);
            layer.draw();
        };
        imageObj1.src = 'https://maths-made-easy-9hfyw8h.netdna-ssl.com/wp-content/uploads/mme_ads_uploads/test2.png';

        var imageObj2 = new Image();

        imageObj2.onload = function() {
            yodaImg.image(imageObj2);
            layer.draw();
        };
        imageObj2.src = 'https://maths-made-easy-9hfyw8h.netdna-ssl.com/wp-content/uploads/mme_ads_uploads/test2.png';

        stage.on('click', function(e) {
            if (e.target === stage) {
                stage.find('Transformer').destroy();
                layer.draw();
                return;
            }
            // do nothing if clicked NOT on our rectangles
            if (!e.target.hasName('imgs')) {
                return;
            }
            // remove old transformers
            // TODO: we can skip it if current rect is already selected
            stage.find('Transformer').destroy();

            // create new transformer
            var tr = new Konva.Transformer();
            layer.add(tr);
            tr.attachTo(e.target);
            layer.draw();
        });

        function addTrans(e) {

        }

        $("#interactive_3d").interactive_3d({
            frames: 10, // The total number of images to be used as frames. The higher, the smoother your interaction will be. The default value is 10 frames.
            cursor: "move", // The CSS style to indicate what cursor will show when the user hover the object. The default value is "move"
            speed: 0, // The speed of the rotation in milliseconds delay. If you have small number of frames and the rotation seems too fast and not smooth, increase this value to 50 - 100 milliseconds delay. The default value is 0.
            entrance: true, // Entrance Animation. Toggle this to false to turn it off. The default value is true.
            preloadImages: true, // Let the script preload all the frames on initial load. Toggle this to false to turn it off. The default value is true.
            touchSupport: true, // The script support touch events for mobile phones. If this interferes with your website behaviour, you can toggle this to false. The default value is true.
            loading: "Loading..", // This only applies if preloadImages is true. This option let you show a loading indicator while the script is preloading the images. The option accepts HTML. Toggle this to false to turn this off. The default value is "Loading.."
            autoPlay: false // This option will superseded entrance option. The 3D object will start rotating automatically if autoPlay is not false. This option accepts the speed of the rotation in milliseconds delay. The default value is false.
        });

    </script>



@stop