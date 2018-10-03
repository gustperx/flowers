// 1518
function mainListeners() {
    setTimeout(function() {
        $('ul.status').remove();
    }, 3000);
    $('.overlay').colorbox({
        onComplete: function() {
            FB.XFBML.parse();
        },
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>'
    });
    $(document).bind('cbox_complete', function() {
        $('.overlay').colorbox({
            onComplete: function() {
                FB.XFBML.parse();
            },
            close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>'
        });
    });
}


// 6332
function byobinit() {
    $('html').addClass('noselect');
    menuaccordian();
    navigationhovers();
    interfaceListeners();
    makeHelp();
    makeHints();
    $('#itemWrapper').mCustomScrollbar();
    makestage = makecanvas();
    stage = makestage[0];
    background = makestage[1];
    containerlayer = makestage[2];
    sundrylayer = makestage[3];
    foreground = makestage[4];
    items = new Array();
    nextfree = 0;
    cImgListener();
    addCanvasListeners(background, containerlayer, foreground);
    stemcount = 0;
    creativecharge = creativecharge1;
    totalcost += creativecharge;
    displaycost = totalcost.toFixed(2).toString().split(".");
    $('#pounds').text(displaycost[0]);
    $('#pence').text("." + displaycost[1]);
    cantake = [true, ""];
    $('#save').click(function() {
        saveBuild();
    });
    $('.bouquetConfBuy').click(function() {
        placedfoliage = calculateFoliage();
        if (((totalflowers - placedfoliage) < minimumstems) && (calculateFoliage() < minimumfoliage)) {
            postinfo = {
                foliage: (minimumfoliage - placedfoliage),
                stems: (minimumstems - (totalflowers - placedfoliage))
            };
            console.log('post2');

            $.post('overlay/dialog/buystemsfoliage', postinfo, function(data) {
                makeInformationOverlay(data);
            });
        } else if ((totalflowers - placedfoliage) < minimumstems) {
            postinfo = {
                stems: (minimumstems - (totalflowers - placedfoliage))
            };
            console.log('post3');

            $.post('overlay/dialog/buystems', postinfo, function(data) {
                makeInformationOverlay(data);
            });
        } else if (placedfoliage < minimumfoliage) {
            postinfo = {
                foliage: (minimumfoliage - placedfoliage)
            };
            console.log('post4');

            console.log('post5');

            $.post('overlay/dialog/buyfoliage', postinfo, function(data) {
                makeInformationOverlay(data);
            });
        } else {
            $.colorbox({
                width: "400px",
                href: "store/confirm",
                close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                onComplete: function() {
                    $('#ok').click(function(ev) {
                        $.colorbox.close();
                        ev.preventDefault;
                    });
                }
            });
        }
    });
    $('#share').click(function() {
        vase.moveToTop();
        background.draw();
        currentcontainer = containerlayer.getChildren()[0];
        if (currentcontainer) {
            currentcontainer.setImage(images[currentcontainer.getName()][1]);
            containerlayer.draw();
        }
        stage.toDataURL({
            callback: function(dataUrl) {
                splitDataUrl = dataUrl.split(',');
                $.post('/share', {
                    buildImg: splitDataUrl[1]
                }, function(data) {
                    $.colorbox({
                        html: data,
                        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                        onComplete: function() {
                            FB.XFBML.parse();
                            doshares($('#sharelink').val(), $('#sharesocialtitle').val());
                            shareclick_oncomplete();
                        }
                    });
                });
                currentcontainer = containerlayer.getChildren()[0];
                if (currentcontainer) {
                    currentcontainer.setImage(images[currentcontainer.getName()][0]);
                    containerlayer.draw();
                }
                vase.moveToBottom();
                background.draw();
            },
            mimeType: 'image/jpeg',
            quality: 0.9
        });
    });
};

// HTML MENU (byobinit)
function menuaccordian() {
    $('#sortoptions > div').children('a').each(function(index, el) {
        if ($(el).attr('href') != 'stem') {
            $(el).click(function(ev) {
                var choicetype = $(this).attr('href');
                $.post('sort/html', {
                    type: choicetype
                }, function(data) {
                    updatemenu(data);
                    if (choicetype == 'container') {
                        containeravailability();
                    } else if (choicetype == 'sundry') {
                        sundryavailability();
                    }
                });
                ev.preventDefault();
            });
        }
    });
    $('.showAllFlowers > a').click(function(ev) {
        lastfilter = 'all';
        $.post('sort/html', {
            type: 'stem',
            sort: $('#sortby').val()
        }, function(data) {
            updatemenu(data);
            $('#filterByChoice').html('');
        });
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
        ev.preventDefault();
    });
    $('#sortby').change(function(ev) {
        sorttype = $(this).val();
        sorttext = $(this).children().filter(":selected").text();
        lastsort = sorttype;
        if (lastfilter == 'all') {
            postdata = {
                type: 'stem',
                sort: sorttype
            };
        } else {
            postdata = {
                type: 'stem',
                sort: sorttype,
                filter: lastfilter
            };
        }
        $.post('sort/html', postdata, function(data) {
            updatemenu(data);
            $('#sortByChoice').html(sorttext);
        });
        ev.preventDefault();
    });
    $('.letterBlock span').each(function(index, el) {
        if (!$(el).hasClass('unused')) {
            $(el).click(function(ev) {
                letter = $(this).attr('class');
                lastfilter = 'name=' + letter;
                $.post('sort/html', {
                    type: 'stem',
                    filter: lastfilter,
                    sort: $('#sortby').val()
                }, function(data) {
                    updatemenu(data);
                    $('#filterByChoice').html("Name");
                });
            });
            $(el).css('cursor', 'pointer');
        }
    });
    $('.flowerColourBlock a').click(function(ev) {
        colour = $(this).attr('class');
        lastfilter = 'colour=' + colour;
        $.post('sort/html', {
            type: 'stem',
            filter: lastfilter,
            sort: $('#sortby').val()
        }, function(data) {
            updatemenu(data);
            $('#filterByChoice').html("Colour");
        });
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
        ev.preventDefault();
    });
    $('.meaningBlock a').click(function(ev) {
        meaning = $(this).attr('class');
        lastfilter = 'meaning=' + meaning;
        $.post('sort/html', {
            type: 'stem',
            filter: lastfilter,
            sort: $('#sortby').val()
        }, function(data) {
            updatemenu(data);
            $('#filterByChoice').html("Meaning");
        });
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
        ev.preventDefault();
    });
    $('#viewMenu').click(function(ev) {
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
    });
    $('#viewMenu').click(function(ev) {
        if (firstclick) {
            $('.secondLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
            $('.topLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
            $('.nameBlock, .colourBlock, .meaningBlock').each(function(index, el) {
                if (!$(el).hasClass('hideBlock')) {
                    $(el).addClass('hideBlock');
                }
            });
            $('#sortoptions').toggleClass('hideBlock');
            firstclick = false;
        } else {
            $('.secondLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
            $('.topLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
            $('.stemOptions > .topLevelButton').find('.arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-open.png) no-repeat top left',
                'width': '20px',
                'height': '14px'
            });
            $('.nameBlock, .colourBlock, .meaningBlock').each(function(index, el) {
                if (!$(el).hasClass('hideBlock')) {
                    $(el).addClass('hideBlock');
                }
            });
            $('#sortoptions').toggleClass('hideBlock');
            if ($('.flowersOptions').hasClass('hideBlock')) {
                $('.flowersOptions').removeClass('hideBlock');
            }
        }
        ev.preventDefault();
    });
    $('.filterByName > a, .filterByColour > a, .filterByMeaning > a').click(function(ev) {
        $('.nameBlock, .colourBlock, .meaningBlock').each(function(index, el) {
            if (!$(el).hasClass('hideBlock')) {
                $(el).addClass('hideBlock');
            }
            $('.secondLevelButton .arrow').css({
                'background': 'url(media/images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
        });
        $(this).find('.arrow').css({
            'background': 'url(media/images/configurator/menu/menu-silver-arrow-open.png) no-repeat top left',
            'width': '20px',
            'height': '14px'
        });
        $(this).parent('div').next('div').removeClass('hideBlock');
        ev.preventDefault();
    });
    $('.stemOptions > a').click(function(ev) {
        if ($(this).parent('div').next('div').hasClass('hideBlock')) {
            $(this).find('.arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-open.png) no-repeat top left',
                'width': '20px',
                'height': '14px'
            });
        } else {
            $(this).find('.arrow').css({
                'background': 'url(media/images/configurator/menu/menu-arrow-closed.png) no-repeat top left',
                'width': '14px',
                'height': '20px'
            });
        }
        $(this).parent('div').next('div').toggleClass('hideBlock');
        ev.preventDefault();
    });
    $('.close, .closeProductOverlay').css('cursor', 'pointer');
    $('.close').click(function(ev) {
        $(this).parent('div').toggleClass('hideBlock');
        $('.secondLevelButton .arrow').css({
            'background': 'url(media/images/configurator/menu/menu-silver-arrow-closed.png) no-repeat top left',
            'width': '14px',
            'height': '20px'
        });
    });
    $('.closeProductOverlay').click(function(ev) {
        $('#productPopUp').hide();
        $('.stemBlockWidthAnchor').toggleClass('menuOpen');
    });
}

// Navigation Hovers (byobinit)
function navigationhovers() {
    $('.hintsIcon').on('mouseover mousedown', function(ev) {
        $('.hintsIcon .rollover img').attr('src', '/media/images/leafOn.png');
        $('.hintsIcon').css({
            'color': '#000000'
        });
    });
    $('.hintsIcon').on('mouseleave', function(ev) {
        $('.hintsIcon .rollover img').attr('src', '/media/images/leaf.png');
        $('.hintsIcon').css({
            'color': '#333333'
        });
    });
    $('.creativeCharge img').on('mouseover mousedown', function(ev) {
        $('.creativeCharge img').attr('src', '/media/images/configurator/creativechargeOn.png');
    });
    $('.creativeCharge img').on('mouseleave', function(ev) {
        $('.creativeCharge img').attr('src', '/media/images/configurator/creativecharge.png');
    });
    $('.galleryIcon, .galleryIconH').on('mouseover mousedown', function(ev) {
        $('.galleryIcon .rollover img, .galleryIconH .rollover img').attr('src', '/media/images/configurator/galleryon.png');
        $('.galleryIcon, .galleryIconH').css({
            'color': '#000000'
        });
    });
    $('.galleryIcon, .galleryIconH').on('mouseleave', function(ev) {
        $('.galleryIcon .rollover img, .galleryIconH .rollover img').attr('src', '/media/images/configurator/gallery.png');
        $('.galleryIcon, .galleryIconH').css({
            'color': '#333333'
        });
    });
    $('.helpIcon').on('mouseover mousedown', function(ev) {
        $('.helpIcon .rollover').find('img').attr('src', '/media/images/configurator/helpOn.png');
        $('.helpIcon').css({
            'color': '#000000'
        });
    });
    $('.helpIcon').on('mouseleave', function(ev) {
        $('.helpIcon .rollover').find('img').attr('src', '/media/images/configurator/help.png');
        $('.helpIcon').css({
            'color': '#333333'
        });
    });
    $('.signinIconC, .signoutIconC').on('mouseover mousedown', function(ev) {
        $('.signinIconC img, .signoutIconC img').attr('src', '/media/images/signinon.png');
        $('.signinIconC, .signoutIconC').css({
            'color': '#000000'
        });
    });
    $('.signinIconC, .signoutIconC').on('mouseleave', function(ev) {
        $('.signinIconC img, .signoutIconC img').attr('src', '/media/images/signin.png');
        $('.signinIconC, .signoutIconC').css({
            'color': '#333333'
        });
    });
}

// Listeners (byobinit)
function interfaceListeners() {
    $('.galleryIcon').colorbox({
        width: "380px",
        href: "overlay/gallery",
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
        onComplete: function() {
            $('#gallerySave').click(function(ev) {
                saveBuild();
                ev.preventDefault();
            });
        }
    });
    $('.totalCostWrap').click(function(ev) {
        $.post('overlay/creativecharge', function(data) {
            $.colorbox({
                width: "913px",
                height: "450px",
                html: data,
                close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>'
            });
        });
    });
}

// make Help (byobinit)
function makeHelp() {
    $('.helpIcon').colorbox({
        href: 'overlay/help',
        close: '<span class="close"><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.png" /><span class="closeText">Close</span></span>',
        onOpen: function() {
            $('#cboxOverlay').addClass("helpOverlaySettingsBackground");
        },
        onComplete: function() {
            $('#colorbox').addClass("helpOverlaySettingsBox");
            $('#cboxClose').addClass("helpOverlaySettingsClose");
            $('#cboxLoadedContent').click(function(ev) {
                $.colorbox.close();
            });
        },
        onClosed: function() {
            $('#cboxOverlay').removeClass("helpOverlaySettingsBackground");
            $('#colorbox').removeClass("helpOverlaySettingsBox");
            $('#cboxClose').removeClass("helpOverlaySettingsClose");
        }
    });
}

// make hints (byobinit)
function makeHints() {
    $('.hintsIcon').colorbox({
        href: 'overlay/hintsandtips',
        close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.png" /></span>'
    });
}

// Make Canvas REVISAR
function makecanvas() {
    stage = new Konva.Stage({
        container: "canvasWrapper",
        width: 727,
        height: 503,
        draggable: false,
        listening: true
    });
    background = new Konva.Layer({
        name: "background"
    });
    containerlayer = new Konva.Layer({
        name: "containerlayer"
    });
    sundrylayer = new Konva.Layer({
        name: "sundrylayer"
    });
    foreground = new Konva.Layer({
        name: "foreground"
    });
    stage.add(background);
    $('.kineticjs-content canvas').attr('id', 'background');
    stage.add(containerlayer);
    $('#background').next().attr('id', 'containerlayer');
    stage.add(sundrylayer);
    $('#containerlayer').next().attr('id', 'sundrylayer');
    stage.add(foreground);
    $('#sundrylayer').next().attr('id', 'foreground');
    bg = new Image();
    bg.src = "media/images/bg.png";
    bg.onload = function() {
        vase = new Konva.Image({
            x: 0,
            y: 0,
            image: bg,
            draggable: false
        });
        centrepoint = new Konva.Circle({
            x: 355,
            y: stage.getHeight() - 190,
            radius: 5,
            fill: "green",
            stroke: "green",
            strokeWidth: 1,
            draggable: false
        });
        startTxt = new Image();
        startTxt.src = "media/images/start.png";
        startTxt.onload = function() {
            startImg = new Konva.Image({
                x: 176,
                y: 81,
                image: startTxt,
                draggable: false,
                id: "startText"
            });
            startImgText = new Konva.Text({
                x: 200,
                y: 220,
                text: "Drag in a stem to get started",
                fontSize: 28,
                fontFamily: "Louisiana",
                textFill: "black",
                align: "center",
                id: "startImgText"
            });
            dustybin = new Image();
            dustybin.src = "media/images/trash.png";
            dustybin.onload = function() {
                dusty = new Konva.Image({
                    x: 22,
                    y: 403,
                    image: dustybin,
                    draggable: false,
                    id: "trash"
                });
                notepad = new Image();
                notepad.src = "media/images/notepad.png";
                notepadOn = new Image();
                notepadOn.src = "media/images/notepadOn.png";
                notepad.onload = function() {
                    mycreation = new Konva.Image({
                        x: 5,
                        y: 311,
                        image: notepad,
                        draggable: false
                    });
                    mycreationTxt = new Konva.Text({
                        x: 12,
                        y: 330,
                        text: "My Creation Details",
                        fontSize: 21,
                        fontFamily: "Louisiana",
                        fill: "black",
                        align: "center",
                        width: 65,
                        lineHeight: 0.65
                    });
                    startagain = new Image();
                    startagain.src = "media/images/reset.png";
                    startagainOn = new Image();
                    startagainOn.src = "media/images/resetOn.png";
                    startagain.onload = function() {
                        resetbouquet = new Konva.Image({
                            x: 12,
                            y: 470,
                            image: startagain,
                            draggable: false
                        });
                        resetbouquetTxt = new Konva.Text({
                            x: 32,
                            y: 476,
                            text: "Start again",
                            fontSize: 11,
                            fontFamily: "Arial",
                            fontStyle: "bold",
                            fill: "#333333",
                            align: "left"
                        });
                        resetIcon = new Konva.Group();
                        resetIcon.add(resetbouquet);
                        resetIcon.add(resetbouquetTxt);
                        resetIcon.on('click tap', function(ev) {
                            $.colorbox({
                                width: "356px",
                                href: "overlay/clear",
                                close: '<span class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></span>',
                                onComplete: function() {
                                    $('#yesClear').click(function(ev) {
                                        clearAll();
                                        $.colorbox.close();
                                        ev.preventDefault();
                                    });
                                    $('#noClear').click(function(ev) {
                                        $.colorbox.close();
                                        ev.preventDefault();
                                    });
                                }
                            });
                        });
                        resetIcon.on('mouseover', function(ev) {
                            resetbouquet.setImage(startagainOn);
                            resetbouquetTxt.setFill("#000000");
                            document.body.style.cursor = "pointer";
                            background.draw();
                        });
                        resetIcon.on('mouseout', function(ev) {
                            resetbouquet.setImage(startagain);
                            resetbouquetTxt.setFill("#333333");
                            document.body.style.cursor = "default";
                            background.draw();
                        });
                        inventoryIcon = new Konva.Group();
                        inventoryIcon.add(mycreation);
                        inventoryIcon.add(mycreationTxt);
                        inventoryIcon.on('click tap', function(ev) {
                            makeInventory();
                        });
                        inventoryIcon.on('mouseover', function(ev) {
                            mycreation.setImage(notepadOn);
                            document.body.style.cursor = "pointer";
                            background.draw();
                        });
                        inventoryIcon.on('mouseout', function(ev) {
                            mycreation.setImage(notepad);
                            document.body.style.cursor = "default";
                            background.draw();
                        });
                        background.add(inventoryIcon);
                        background.add(resetIcon);
                        background.add(vase);
                        background.add(startImg);
                        background.add(startImgText);
                        background.add(dusty);
                        vase.moveToBottom();
                        background.draw();
                        buildxml = $('#xmlBuild').html();
                        if (buildxml.length > 0) {
                            recreateBuild(buildxml, background, containerlayer, sundrylayer, foreground, stage);
                        }
                        $.colorbox.close();
                    }
                }
            }
        }
    }
    container = makecontainer(defaultcontainer, true);
    containerlayer.add(container);
    containerlayer.draw();
    ribbon = makeribbon(defaultsundry, true);
    sundrylayer.add(ribbon);
    sundrylayer.draw();
    totalcost += container.price;
    displaycost = totalcost.toFixed(2).toString().split(".");
    $('#pounds').text(displaycost[0]);
    $('#pence').text("." + displaycost[1]);
    return [stage, background, containerlayer, sundrylayer, foreground];
}

// Make Container VER
function makecontainer(imgname, isdefault) {

    //console.log(imgname); console.log(isdefault);
    //console.log(images);

    image = images[imgname];
    imgW = image[0].width;
    offsetx = imgW / 2;
    container = new Konva.Image({
        x: 355 - offsetx,
        y: 260,
        image: image[0],
        draggable: false,
        name: imgname
    });
    container.productNum = imgname;
    container.pid = imgname;
    container.pvol = image[0].pvol;
    container.bulky = image[0].bulky;
    container.price = image[0].pcost / 100;
    container.isdefault = isdefault;
    return container;
}

// Make Ribbon
function makeribbon(imgname) {
    image = images[imgname];
    imgW = image[0].width;
    offsetx = imgW / 2;
    ribbon = new Konva.Image({
        x: 355 - offsetx,
        y: 270,
        image: image[0],
        draggable: false,
        name: imgname
    });
    ribbon.productNum = imgname;
    ribbon.pid = imgname;
    ribbon.price = image[0].pcost / 100;
    return ribbon;
}


// Imagenes en canva REVISAR
function cImgListener() {
    $('img.cImg').each(function() {
        var draggedImg = $(this);
        dragMechanics(draggedImg);
    });
}

// Imagenes REVISAR
function dragMechanics(stem) {
    var fullname = stem.attr('alt');
    stem.on("mousedown", function(event) {
        var thisimages = $(this).parents('.productWrap').attr('class').split(" ");
        var entered = 0;
        var lastrad = 250;
        exited = false;
        if (start == 0) {
            clearStart();
        }
        if ($(this).hasClass('pcontainer')) {
            if ($(this).hasClass('ui-draggable-disabled') == false) {
                thisimage = thisimages[0];
                $('body').on("mousemove", function(ev) {
                    var offset = $('#foreground').offset();
                    var triggerpoint = 50 + offset.left;
                    if (ev.pageX > triggerpoint) {
                        var imgW, imgH;
                        totalcost -= containerlayer.getChildren()[0].price;
                        containerlayer.removeChildren();
                        if (thisimage == defaultcontainer) {
                            isDefault = true;
                            ribbon = makeribbon(defaultsundry, true);
                            sundrylayer.add(ribbon);
                            sundrylayer.draw();
                        } else {
                            isDefault = false;
                            sundrylayer.removeChildren();
                            sundrylayer.draw();
                        }
                        container = makecontainer(thisimage, isDefault);
                        $('.ui-draggable-dragging').css('opacity', '0');
                        containerlayer.add(container);
                        containerlayer.draw();
                        recalculatestemcount();
                        $('body').off("mousemove");
                        totalcost += container.price;
                        displaycost = totalcost.toFixed(2).toString().split(".");
                        $('#pounds').text(displaycost[0]);
                        $('#pence').text("." + displaycost[1]);
                    }
                });
            } else {
                postinfo = {
                    capacity: images[thisimages[0]][0].pvol
                };
                $.post('overlay/dialog/containertoosmall', postinfo, function(data) {
                    makeInformationOverlay(data);
                });
            }
        } else if ($(this).hasClass('psundry')) {
            if ($(this).hasClass('ui-draggable-disabled') == false && isDefaultContainer()) {
                thisimage = thisimages[0];
                $('body').on("mousemove", function(ev) {
                    var offset = $('#foreground').offset();
                    var triggerpoint = 50 + offset.left;
                    if (ev.pageX > triggerpoint) {
                        var imgW, imgH;
                        sundrylayer.removeChildren();
                        ribbon = makeribbon(thisimage);
                        $('.ui-draggable-dragging').css('opacity', '0');
                        sundrylayer.add(ribbon);
                        sundrylayer.draw();
                        $('body').off("mousemove");
                    }
                });
            }
        } else {
            thistype = $(this).attr("class");
            thistype = thistype.split(" ");
            thistype = thistype[1];
            thisimage = thisimages[0];
            $('body').on("mousemove", function(ev) {
                var offset = $('#foreground').offset();
                var triggerpoint = 50 + offset.left;
                cantake = containerCanTakeStem(images[thisimage][0]);
                if (cantake[0]) {
                    $('body').off("mousemove");
                    $('body').on("mousemove", function(ev) {
                        var offset = $('#foreground').offset();
                        var triggerpoint = 50 + offset.left;
                        if ((entered == 0) && (ev.pageX > triggerpoint)) {
                            var imgW, imgH;
                            var d = new Date();
                            var now = d.getTime();
                            mouseX = get_mouse_x(ev);
                            mouseY = get_mouse_y(ev);
                            image = images[thisimage];
                            imgW = image[4].width;
                            imgH = image[4].height;
                            offsetx = imgW / 2;
                            offsety = imgH / 2;
                            items[nextfree] = new Kinetic.Image({
                                x: mouseX - offsetx,
                                y: mouseY - offsety,
                                image: image[4],
                                draggable: true,
                                offset: [offsetx, offsety],
                                name: thisimage + '_' + now,
                                dragBoundFunc: function(pos) {
                                    var limitL = 0 + (imgW / 4);
                                    var limitR = 727 - (imgW / 4);
                                    var limitT = 0 + (imgH / 4);
                                    var limitB = 503 - (imgH / 4);
                                    if ((pos.x > limitL) && (pos.x < limitR) && (pos.y > limitT) && (pos.y < limitB)) {
                                        return pos;
                                    } else {
                                        var newX = pos.x,
                                            newY = pos.y;
                                        if (pos.x <= limitL) {
                                            newX = limitL;
                                        } else if (pos.x >= limitR) {
                                            newX = limitR;
                                        }
                                        if (pos.y <= limitT) {
                                            newY = limitT;
                                        } else if (pos.y >= limitB) {
                                            newY = limitB;
                                        }
                                        return {
                                            x: newX,
                                            y: newY
                                        };
                                    }
                                }
                            });
                            items[nextfree].boundary = 4;
                            items[nextfree].pid = thisimage;
                            items[nextfree].pvol = image[0].pvol;
                            items[nextfree].ptype = thistype;
                            items[nextfree].fullname = fullname;
                            items[nextfree].price = image[0].pcost / 100;
                            $('.ui-draggable-dragging').css('opacity', '0');
                            foreground.add(items[nextfree]);
                            items[nextfree].setZIndex(0);
                            items[nextfree].createImageHitRegion(function() {
                                foreground.draw();
                            });
                            entered++;
                        } else if (entered > 0) {
                            var imgW, imgH;
                            mouseX = get_mouse_x(ev);
                            mouseY = get_mouse_y(ev);
                            if ((mouseX < 50) || (mouseX > 726) || (mouseY < 1) || (mouseY > 503)) {
                                $('body').off("mousemove");
                                items[nextfree].remove();
                                foreground.draw();
                                exited = true;
                            } else {
                                imgW = items[nextfree].getWidth();
                                imgH = items[nextfree].getHeight();
                                if (((mouseX >= (0 + (imgW / 4))) && (mouseX <= (727 - (imgW / 4)))) && ((mouseY >= (0 + (imgH / 4))) && (mouseY <= (503 - (imgH / 4))))) {
                                    gridmouseX = get_grid_mouse_x(ev);
                                    gridmouseY = get_grid_mouse_y(ev);
                                    rads = cart_to_polar(gridmouseX, gridmouseY);
                                    items[nextfree].rad = rads[0];
                                    zindex = calculatezindex(items[nextfree]);
                                    items[nextfree].setZIndex(zindex);
                                    boundary = get_boundary(gridmouseY, rads[0]);
                                    if (gridmouseX > 0) {
                                        items[nextfree].setScale(-1, 1);
                                    } else {
                                        items[nextfree].setScale(1, 1);
                                    }
                                    rotation = calculate_rotation(gridmouseX, gridmouseY, rads);
                                    items[nextfree].setRotationDeg(rotation);
                                    if (gridmouseX > 0) {
                                        items[nextfree].setX(mouseX);
                                        items[nextfree].setY(mouseY);
                                    } else {
                                        items[nextfree].setX(mouseX);
                                        items[nextfree].setY(mouseY);
                                    }
                                    if (boundary !== items[nextfree].boundary) {
                                        items[nextfree].clearImageHitRegion();
                                        items[nextfree].setImage(image[boundary]);
                                        items[nextfree].boundary = boundary;
                                        items[nextfree].createImageHitRegion(function() {
                                            foreground.draw();
                                        });
                                    }
                                    foreground.draw();
                                }
                            }
                        }
                    });
                } else {
                    $('body').off("mousemove");
                    setTimeout(function() {
                        $('.ui-draggable-dragging').draggable('option', 'revert', true).trigger('mouseup');
                        $('.ui-draggable-dragging').remove();
                    }, 50);
                }
            });
        }
    });
    stem.on('mouseup', function(ev) {
        var offset = $('#foreground').offset();
        var triggerpoint = 50 + offset.left;
        $('body').off('mousemove');
        if (ev.pageX < triggerpoint) {
            setTimeout(function() {
                $('.ui-draggable-dragging').draggable('option', 'revert', true).trigger('mouseup');
                $('.ui-draggable-dragging').remove();
            }, 50);
        }
    });
    stem.on('click', function(ev) {
        ev.stopPropagation();
        popX = $(this).offset().left + $(this).outerWidth();
        if ($(this).offset().top < 251) {
            popY = 20;
        } else {
            popY = 147;
        }
        cssclasses = $(this).parents('.productWrap').attr('class').split(" ");
        productname = cssclasses[0];
        productid = productname.replace("product", "");
        $.post('product/index/' + productid, function(data) {
            $('#productPopUp').css({
                "top": popY,
                "left": popX + 30
            });
            $('#productPopUp').html(data).show();
            $('.closeProductOverlay, #productPopUp').click(function(ev) {
                $('#productPopUp').empty().hide();
            });
        });
    });
    stem.draggable({
        appendTo: "body",
        helper: "clone"
    });
}


// CANVAS ?? ADD
function addCanvasListeners(background, containerlayer, foreground) {
    $("#foreground").droppable({
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        accept: ":not(.ui-sortable-helper)",
        drop: function(event, ui) {
            droplistener(background, containerlayer, foreground, event, ui);
        }
    });
}

function droplistener(background, containerlayer, foreground, event, ui) {
    var mouseX, mouseY, imgW, imgH, imgX, imgY;
    var offset = $('#foreground').offset();
    var triggerpoint = 50 + offset.left;
    $('body').off("mousemove");
    if ((event.pageX > triggerpoint) && drawing && !($(ui.draggable).hasClass('pcontainer')) && !($(ui.draggable).hasClass('psundry')) && !exited) {
        totalflowers++;
        totalcost += items[nextfree].price;
        displaycost = totalcost.toFixed(2).toString().split(".");
        $('#pounds').text(displaycost[0]);
        $('#pence').text("." + displaycost[1]);
        stemcountup(items[nextfree]);
        imgW = items[nextfree].width;
        imgH = items[nextfree].height;
        mouseX = get_mouse_x(event);
        mouseY = get_mouse_y(event);
        selecteditem = items[nextfree];
        add_stem_listeners(items[nextfree]);
        fullContainerCheck();
        if (totalflowers == (creativechargeboundary + 1) && optiontobuy) {
            creativecharge = creativecharge2;
            setTimeout(function() {
                $.post('overlay/dialog/creativecharge2', function(data) {
                    makeInformationOverlay(data);
                });
                totalcost -= creativecharge1;
                totalcost += creativecharge2;
                displaycost = totalcost.toFixed(2).toString().split(".");
                $('#pounds').text(displaycost[0]);
                $('#pence').text("." + displaycost[1]);
            }, 50);
        }
    }
    while (items[nextfree]) {
        nextfree++;
    }
}

// SCROL ??
(function(b) {
    var a = {
        init: function(c) {
            var e = {
                    set_width: false,
                    set_height: false,
                    horizontalScroll: false,
                    scrollInertia: 550,
                    scrollEasing: "easeOutCirc",
                    mouseWheel: "auto",
                    autoDraggerLength: true,
                    scrollButtons: {
                        enable: false,
                        scrollType: "continuous",
                        scrollSpeed: 20,
                        scrollAmount: 40
                    },
                    advanced: {
                        updateOnBrowserResize: true,
                        updateOnContentResize: false,
                        autoExpandHorizontalScroll: false
                    },
                    callbacks: {
                        onScroll: function() {},
                        onTotalScroll: function() {},
                        onTotalScrollOffset: 0
                    }
                },
                c = b.extend(true, e, c);
            b(document).data("mCS-is-touch-device", false);
            if (d()) {
                b(document).data("mCS-is-touch-device", true)
            }

            function d() {
                return !!("ontouchstart" in window) ? 1 : 0
            }
            return this.each(function() {
                var m = b(this);
                if (c.set_width) {
                    m.css("width", c.set_width)
                }
                if (c.set_height) {
                    m.css("height", c.set_height)
                }
                if (!b(document).data("mCustomScrollbar-index")) {
                    b(document).data("mCustomScrollbar-index", "1")
                } else {
                    var s = parseInt(b(document).data("mCustomScrollbar-index"));
                    b(document).data("mCustomScrollbar-index", s + 1)
                }
                m.wrapInner("<div class='mCustomScrollBox' id='mCSB_" + b(document).data("mCustomScrollbar-index") + "' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_" + b(document).data("mCustomScrollbar-index"));
                var g = m.children(".mCustomScrollBox");
                if (c.horizontalScroll) {
                    g.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
                    var k = g.children(".mCSB_h_wrapper");
                    k.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({
                        width: k.children().outerWidth(),
                        position: "relative"
                    }).unwrap()
                } else {
                    g.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />")
                }
                var o = g.children(".mCSB_container");
                if (!b(document).data("mCS-is-touch-device")) {
                    o.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer' style='position:relative;'><div class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
                    var l = g.children(".mCSB_scrollTools"),
                        h = l.children(".mCSB_draggerContainer"),
                        q = h.children(".mCSB_dragger");
                    if (c.horizontalScroll) {
                        q.data("minDraggerWidth", q.width())
                    } else {
                        q.data("minDraggerHeight", q.height())
                    }
                    if (c.scrollButtons.enable) {
                        if (c.horizontalScroll) {
                            l.prepend("<a class='mCSB_buttonLeft' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonRight' style='display:block; position:relative;'></a>")
                        } else {
                            l.prepend("<a class='mCSB_buttonUp' style='display:block; position:relative;'></a>").append("<a class='mCSB_buttonDown' style='display:block; position:relative;'></a>")
                        }
                    }
                    g.bind("scroll", function() {
                        g.scrollTop(0).scrollLeft(0)
                    });
                    m.data({
                        horizontalScroll: c.horizontalScroll,
                        scrollInertia: c.scrollInertia,
                        scrollEasing: c.scrollEasing,
                        mouseWheel: c.mouseWheel,
                        autoDraggerLength: c.autoDraggerLength,
                        "scrollButtons-enable": c.scrollButtons.enable,
                        "scrollButtons-scrollType": c.scrollButtons.scrollType,
                        "scrollButtons-scrollSpeed": c.scrollButtons.scrollSpeed,
                        "scrollButtons-scrollAmount": c.scrollButtons.scrollAmount,
                        autoExpandHorizontalScroll: c.advanced.autoExpandHorizontalScroll,
                        "onScroll-Callback": c.callbacks.onScroll,
                        "onTotalScroll-Callback": c.callbacks.onTotalScroll,
                        "onTotalScroll-Offset": c.callbacks.onTotalScrollOffset
                    }).mCustomScrollbar("update");
                    if (c.advanced.updateOnBrowserResize) {
                        var i;
                        b(window).resize(function() {
                            if (i) {
                                clearTimeout(i)
                            }
                            i = setTimeout(function() {
                                m.mCustomScrollbar("update")
                            }, 150)
                        })
                    }
                } else {
                    var f = navigator.userAgent;
                    if (f.indexOf("Android") != -1) {
                        var r = parseFloat(f.slice(f.indexOf("Android") + 8));
                        if (r < 3) {
                            j("mCSB_" + b(document).data("mCustomScrollbar-index"))
                        } else {
                            g.css({
                                overflow: "auto",
                                "-webkit-overflow-scrolling": "touch"
                            })
                        }
                    } else {
                        g.css({
                            overflow: "auto",
                            "-webkit-overflow-scrolling": "touch"
                        })
                    }
                    o.addClass("mCS_no_scrollbar mCS_touch");
                    m.data({
                        horizontalScroll: c.horizontalScroll,
                        scrollInertia: c.scrollInertia,
                        scrollEasing: c.scrollEasing,
                        autoExpandHorizontalScroll: c.advanced.autoExpandHorizontalScroll,
                        "onScroll-Callback": c.callbacks.onScroll,
                        "onTotalScroll-Callback": c.callbacks.onTotalScroll,
                        "onTotalScroll-Offset": c.callbacks.onTotalScrollOffset
                    });
                    g.scroll(function() {
                        m.mCustomScrollbar("callbacks", g, o)
                    });

                    function j(w) {
                        var t = document.getElementById(w),
                            u = 0,
                            v = 0;
                        document.getElementById(w).addEventListener("touchstart", function(x) {
                            u = this.scrollTop + x.touches[0].pageY;
                            v = this.scrollLeft + x.touches[0].pageX
                        }, false);
                        document.getElementById(w).addEventListener("touchmove", function(x) {
                            if ((this.scrollTop < this.scrollHeight - this.offsetHeight && this.scrollTop + x.touches[0].pageY < u - 5) || (this.scrollTop != 0 && this.scrollTop + x.touches[0].pageY > u + 5)) {
                                x.preventDefault()
                            }
                            if ((this.scrollLeft < this.scrollWidth - this.offsetWidth && this.scrollLeft + x.touches[0].pageX < v - 5) || (this.scrollLeft != 0 && this.scrollLeft + x.touches[0].pageX > v + 5)) {
                                x.preventDefault()
                            }
                            this.scrollTop = u - x.touches[0].pageY;
                            this.scrollLeft = v - x.touches[0].pageX
                        }, false)
                    }
                }
                if (c.advanced.updateOnContentResize) {
                    var p;
                    if (c.horizontalScroll) {
                        var n = o.outerWidth();
                        if (d()) {
                            g.css({
                                "-webkit-overflow-scrolling": "auto"
                            })
                        }
                    } else {
                        var n = o.outerHeight()
                    }
                    p = setInterval(function() {
                        if (c.horizontalScroll) {
                            if (c.advanced.autoExpandHorizontalScroll) {
                                o.css({
                                    position: "absolute",
                                    width: "auto"
                                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                    width: o.outerWidth(),
                                    position: "relative"
                                }).unwrap()
                            }
                            var t = o.outerWidth()
                        } else {
                            var t = o.outerHeight()
                        }
                        if (t != n) {
                            m.mCustomScrollbar("update");
                            n = t
                        }
                    }, 300)
                }
            })
        },
        update: function() {
            var l = b(this),
                i = l.children(".mCustomScrollBox"),
                o = i.children(".mCSB_container");
            if (!b(document).data("mCS-is-touch-device")) {
                o.removeClass("mCS_no_scrollbar")
            }
            var w = i.children(".mCSB_scrollTools"),
                m = w.children(".mCSB_draggerContainer"),
                k = m.children(".mCSB_dragger");
            if (l.data("horizontalScroll")) {
                var y = w.children(".mCSB_buttonLeft"),
                    r = w.children(".mCSB_buttonRight"),
                    d = i.width();
                if (l.data("autoExpandHorizontalScroll")) {
                    o.css({
                        position: "absolute",
                        width: "auto"
                    }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                        width: o.outerWidth(),
                        position: "relative"
                    }).unwrap()
                }
                var x = o.outerWidth()
            } else {
                var u = w.children(".mCSB_buttonUp"),
                    e = w.children(".mCSB_buttonDown"),
                    p = i.height(),
                    g = o.outerHeight()
            }
            if (g > p && !l.data("horizontalScroll") && !b(document).data("mCS-is-touch-device")) {
                w.css("display", "block");
                var q = m.height();
                if (l.data("autoDraggerLength")) {
                    var s = Math.round(p / g * q),
                        j = k.data("minDraggerHeight");
                    if (s <= j) {
                        k.css({
                            height: j
                        })
                    } else {
                        if (s >= q - 10) {
                            var n = q - 10;
                            k.css({
                                height: n
                            })
                        } else {
                            k.css({
                                height: s
                            })
                        }
                    }
                    k.children(".mCSB_dragger_bar").css({
                        "line-height": k.height() + "px"
                    })
                }
                var z = k.height(),
                    v = (g - p) / (q - z);
                l.data("scrollAmount", v);
                l.mCustomScrollbar("scrolling", i, o, m, k, u, e, y, r);
                var B = Math.abs(Math.round(o.position().top));
                l.mCustomScrollbar("scrollTo", B, {
                    callback: false
                })
            } else {
                if (x > d && l.data("horizontalScroll") && !b(document).data("mCS-is-touch-device")) {
                    w.css("display", "block");
                    var f = m.width();
                    if (l.data("autoDraggerLength")) {
                        var h = Math.round(d / x * f),
                            A = k.data("minDraggerWidth");
                        if (h <= A) {
                            k.css({
                                width: A
                            })
                        } else {
                            if (h >= f - 10) {
                                var c = f - 10;
                                k.css({
                                    width: c
                                })
                            } else {
                                k.css({
                                    width: h
                                })
                            }
                        }
                    }
                    var t = k.width(),
                        v = (x - d) / (f - t);
                    l.data("scrollAmount", v);
                    l.mCustomScrollbar("scrolling", i, o, m, k, u, e, y, r);
                    var B = Math.abs(Math.round(o.position().left));
                    l.mCustomScrollbar("scrollTo", B, {
                        callback: false
                    })
                } else {
                    i.unbind("mousewheel");
                    i.unbind("focusin");
                    if (l.data("horizontalScroll")) {
                        k.add(o).css("left", 0)
                    } else {
                        k.add(o).css("top", 0)
                    }
                    w.css("display", "none");
                    o.addClass("mCS_no_scrollbar")
                }
            }
        },
        scrolling: function(h, p, m, j, v, c, y, s) {
            var l = b(this);
            if (!j.hasClass("ui-draggable")) {
                if (l.data("horizontalScroll")) {
                    var i = "x"
                } else {
                    var i = "y"
                }
                j.draggable({
                    axis: i,
                    containment: "parent",
                    drag: function(B, C) {
                        l.mCustomScrollbar("scroll");
                        j.addClass("mCSB_dragger_onDrag")
                    },
                    stop: function(B, C) {
                        j.removeClass("mCSB_dragger_onDrag")
                    }
                })
            }
            m.unbind("click").bind("click", function(D) {
                if (l.data("horizontalScroll")) {
                    var B = (D.pageX - m.offset().left);
                    if (B < j.position().left || B > (j.position().left + j.width())) {
                        var C = B;
                        if (C >= m.width() - j.width()) {
                            C = m.width() - j.width()
                        }
                        j.css("left", C);
                        l.mCustomScrollbar("scroll")
                    }
                } else {
                    var B = (D.pageY - m.offset().top);
                    if (B < j.position().top || B > (j.position().top + j.height())) {
                        var C = B;
                        if (C >= m.height() - j.height()) {
                            C = m.height() - j.height()
                        }
                        j.css("top", C);
                        l.mCustomScrollbar("scroll")
                    }
                }
            });
            if (l.data("mouseWheel")) {
                var t = l.data("mouseWheel");
                if (l.data("mouseWheel") === "auto") {
                    t = 8;
                    var n = navigator.userAgent;
                    if (n.indexOf("Mac") != -1 && n.indexOf("Safari") != -1 && n.indexOf("AppleWebKit") != -1 && n.indexOf("Chrome") == -1) {
                        t = 1
                    }
                }
                h.unbind("mousewheel").bind("mousewheel", function(E, J) {
                    E.preventDefault();
                    var I = Math.abs(J * t);
                    if (l.data("horizontalScroll")) {
                        var D = j.position().left - (J * I);
                        j.css("left", D);
                        if (j.position().left < 0) {
                            j.css("left", 0)
                        }
                        var H = m.width(),
                            G = j.width();
                        if (j.position().left > H - G) {
                            j.css("left", H - G)
                        }
                    } else {
                        var B = j.position().top - (J * I);
                        j.css("top", B);
                        if (j.position().top < 0) {
                            j.css("top", 0)
                        }
                        var F = m.height(),
                            C = j.height();
                        if (j.position().top > F - C) {
                            j.css("top", F - C)
                        }
                    }
                    l.mCustomScrollbar("scroll")
                })
            }
            if (l.data("scrollButtons-enable")) {
                if (l.data("scrollButtons-scrollType") === "pixels") {
                    var A;
                    if (b.browser.msie && parseInt(b.browser.version) < 9) {
                        l.data("scrollInertia", 0)
                    }
                    if (l.data("horizontalScroll")) {
                        s.add(y).unbind("click mousedown mouseup mouseout", k, g);
                        s.bind("click", function(B) {
                            B.preventDefault();
                            if (!p.is(":animated")) {
                                A = Math.abs(p.position().left) + l.data("scrollButtons-scrollAmount");
                                l.mCustomScrollbar("scrollTo", A)
                            }
                        });
                        y.bind("click", function(B) {
                            B.preventDefault();
                            if (!p.is(":animated")) {
                                A = Math.abs(p.position().left) - l.data("scrollButtons-scrollAmount");
                                if (p.position().left >= -l.data("scrollButtons-scrollAmount")) {
                                    A = "left"
                                }
                                l.mCustomScrollbar("scrollTo", A)
                            }
                        })
                    } else {
                        c.add(v).unbind("click mousedown mouseup mouseout", r, f);
                        c.bind("click", function(B) {
                            B.preventDefault();
                            if (!p.is(":animated")) {
                                A = Math.abs(p.position().top) + l.data("scrollButtons-scrollAmount");
                                l.mCustomScrollbar("scrollTo", A)
                            }
                        });
                        v.bind("click", function(B) {
                            B.preventDefault();
                            if (!p.is(":animated")) {
                                A = Math.abs(p.position().top) - l.data("scrollButtons-scrollAmount");
                                if (p.position().top >= -l.data("scrollButtons-scrollAmount")) {
                                    A = "top"
                                }
                                l.mCustomScrollbar("scrollTo", A)
                            }
                        })
                    }
                } else {
                    if (l.data("horizontalScroll")) {
                        s.add(y).unbind("click mousedown mouseup mouseout", k, g);
                        var x, e = m.width(),
                            u = j.width();
                        s.bind("mousedown", function(C) {
                            C.preventDefault();
                            var B = e - u;
                            x = setInterval(function() {
                                var D = Math.abs(j.position().left - B) * (100 / l.data("scrollButtons-scrollSpeed"));
                                j.stop().animate({
                                    left: B
                                }, D, "linear");
                                l.mCustomScrollbar("scroll")
                            }, 20)
                        });
                        var k = function(B) {
                            B.preventDefault();
                            clearInterval(x);
                            j.stop()
                        };
                        s.bind("mouseup mouseout", k);
                        var d;
                        y.bind("mousedown", function(C) {
                            C.preventDefault();
                            var B = 0;
                            d = setInterval(function() {
                                var D = Math.abs(j.position().left - B) * (100 / l.data("scrollButtons-scrollSpeed"));
                                j.stop().animate({
                                    left: B
                                }, D, "linear");
                                l.mCustomScrollbar("scroll")
                            }, 20)
                        });
                        var g = function(B) {
                            B.preventDefault();
                            clearInterval(d);
                            j.stop()
                        };
                        y.bind("mouseup mouseout", g)
                    } else {
                        c.add(v).unbind("click mousedown mouseup mouseout", r, f);
                        var o, q = m.height(),
                            z = j.height();
                        c.bind("mousedown", function(C) {
                            C.preventDefault();
                            var B = q - z;
                            o = setInterval(function() {
                                var D = Math.abs(j.position().top - B) * (100 / l.data("scrollButtons-scrollSpeed"));
                                j.stop().animate({
                                    top: B
                                }, D, "linear");
                                l.mCustomScrollbar("scroll")
                            }, 20)
                        });
                        var r = function(B) {
                            B.preventDefault();
                            clearInterval(o);
                            j.stop()
                        };
                        c.bind("mouseup mouseout", r);
                        var w;
                        v.bind("mousedown", function(C) {
                            C.preventDefault();
                            var B = 0;
                            w = setInterval(function() {
                                var D = Math.abs(j.position().top - B) * (100 / l.data("scrollButtons-scrollSpeed"));
                                j.stop().animate({
                                    top: B
                                }, D, "linear");
                                l.mCustomScrollbar("scroll")
                            }, 20)
                        });
                        var f = function(B) {
                            B.preventDefault();
                            clearInterval(w);
                            j.stop()
                        };
                        v.bind("mouseup mouseout", f)
                    }
                }
            }
            h.unbind("focusin").bind("focusin", function() {
                h.scrollTop(0).scrollLeft(0);
                var C = b(document.activeElement);
                if (C.is("input,textarea,select,button,a[tabindex],area,object")) {
                    if (l.data("horizontalScroll")) {
                        var J = p.position().left,
                            G = C.position().left,
                            E = h.width(),
                            H = C.outerWidth();
                        if (J + G >= 0 && J + G <= E - H) {} else {
                            var K = G / l.data("scrollAmount");
                            if (K >= m.width() - j.width()) {
                                K = m.width() - j.width()
                            }
                            j.css("left", K);
                            l.mCustomScrollbar("scroll")
                        }
                    } else {
                        var I = p.position().top,
                            F = C.position().top,
                            B = h.height(),
                            D = C.outerHeight();
                        if (I + F >= 0 && I + F <= B - D) {} else {
                            var K = F / l.data("scrollAmount");
                            if (K >= m.height() - j.height()) {
                                K = m.height() - j.height()
                            }
                            j.css("top", K);
                            l.mCustomScrollbar("scroll")
                        }
                    }
                }
            })
        },
        scroll: function(h) {
            var k = b(this),
                p = k.find(".mCSB_dragger"),
                n = k.find(".mCSB_container"),
                e = k.find(".mCustomScrollBox");
            if (k.data("horizontalScroll")) {
                var g = p.position().left,
                    m = -g * k.data("scrollAmount"),
                    o = n.position().left,
                    d = Math.round(o - m)
            } else {
                var f = p.position().top,
                    j = -f * k.data("scrollAmount"),
                    l = n.position().top,
                    c = Math.round(l - j)
            }
            if (b.browser.webkit) {
                var q = (window.outerWidth - 8) / window.innerWidth,
                    i = (q < 0.98 || q > 1.02)
            }
            if (k.data("scrollInertia") === 0 || i) {
                if (k.data("horizontalScroll")) {
                    n.css("left", m)
                } else {
                    n.css("top", j)
                }
                if (!h) {
                    k.mCustomScrollbar("callbacks", e, n)
                }
            } else {
                if (k.data("horizontalScroll")) {
                    n.stop().animate({
                        left: "-=" + d
                    }, k.data("scrollInertia"), k.data("scrollEasing"), function() {
                        if (!h) {
                            k.mCustomScrollbar("callbacks", e, n)
                        }
                    })
                } else {
                    n.stop().animate({
                        top: "-=" + c
                    }, k.data("scrollInertia"), k.data("scrollEasing"), function() {
                        if (!h) {
                            k.mCustomScrollbar("callbacks", e, n)
                        }
                    })
                }
            }
        },
        scrollTo: function(g, m) {
            var f = {
                    moveDragger: false,
                    callback: true
                },
                m = b.extend(f, m),
                i = b(this),
                c, d = i.find(".mCustomScrollBox"),
                j = d.children(".mCSB_container");
            if (!b(document).data("mCS-is-touch-device")) {
                var e = i.find(".mCSB_draggerContainer"),
                    k = e.children(".mCSB_dragger")
            }
            var l;
            if (g) {
                if (typeof(g) === "number") {
                    if (m.moveDragger) {
                        c = g
                    } else {
                        l = g;
                        c = Math.round(l / i.data("scrollAmount"))
                    }
                } else {
                    if (typeof(g) === "string") {
                        var h;
                        if (g === "top") {
                            h = 0
                        } else {
                            if (g === "bottom" && !i.data("horizontalScroll")) {
                                h = j.outerHeight() - d.height()
                            } else {
                                if (g === "left") {
                                    h = 0
                                } else {
                                    if (g === "right" && i.data("horizontalScroll")) {
                                        h = j.outerWidth() - d.width()
                                    } else {
                                        if (g === "first") {
                                            h = i.find(".mCSB_container").find(":first")
                                        } else {
                                            if (g === "last") {
                                                h = i.find(".mCSB_container").find(":last")
                                            } else {
                                                h = i.find(g)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (h.length === 1) {
                            if (i.data("horizontalScroll")) {
                                l = h.position().left
                            } else {
                                l = h.position().top
                            }
                            if (b(document).data("mCS-is-touch-device")) {
                                c = l
                            } else {
                                c = Math.ceil(l / i.data("scrollAmount"))
                            }
                        } else {
                            c = h
                        }
                    }
                }
                if (b(document).data("mCS-is-touch-device")) {
                    if (i.data("horizontalScroll")) {
                        d.stop().animate({
                            scrollLeft: c
                        }, i.data("scrollInertia"), i.data("scrollEasing"), function() {
                            if (m.callback) {
                                i.mCustomScrollbar("callbacks", d, j)
                            }
                        })
                    } else {
                        d.stop().animate({
                            scrollTop: c
                        }, i.data("scrollInertia"), i.data("scrollEasing"), function() {
                            if (m.callback) {
                                i.mCustomScrollbar("callbacks", d, j)
                            }
                        })
                    }
                } else {
                    if (i.data("horizontalScroll")) {
                        if (c >= e.width() - k.width()) {
                            c = e.width() - k.width()
                        }
                        k.css("left", c)
                    } else {
                        if (c >= e.height() - k.height()) {
                            c = e.height() - k.height()
                        }
                        k.css("top", c)
                    }
                    if (m.callback) {
                        i.mCustomScrollbar("scroll")
                    } else {
                        i.mCustomScrollbar("scroll", true)
                    }
                }
            }
        },
        callbacks: function(e, h) {
            var i = b(this);
            if (!b(document).data("mCS-is-touch-device")) {
                if (i.data("horizontalScroll")) {
                    var g = Math.round(h.position().left);
                    if (g < 0 && g <= e.width() - h.outerWidth() + i.data("onTotalScroll-Offset")) {
                        i.data("onTotalScroll-Callback").call()
                    } else {
                        i.data("onScroll-Callback").call()
                    }
                } else {
                    var f = Math.round(h.position().top);
                    if (f < 0 && f <= e.height() - h.outerHeight() + i.data("onTotalScroll-Offset")) {
                        i.data("onTotalScroll-Callback").call()
                    } else {
                        i.data("onScroll-Callback").call()
                    }
                }
            } else {
                if (i.data("horizontalScroll")) {
                    var d = Math.round(e.scrollLeft());
                    if (d > 0 && d >= h.outerWidth() - i.width() - i.data("onTotalScroll-Offset")) {
                        i.data("onTotalScroll-Callback").call()
                    } else {
                        i.data("onScroll-Callback").call()
                    }
                } else {
                    var c = Math.round(e.scrollTop());
                    if (c > 0 && c >= h.outerHeight() - i.height() - i.data("onTotalScroll-Offset")) {
                        i.data("onTotalScroll-Callback").call()
                    } else {
                        i.data("onScroll-Callback").call()
                    }
                }
            }
        }
    };
    b.fn.mCustomScrollbar = function(c) {
        if (a[c]) {
            return a[c].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof c === "object" || !c) {
                return a.init.apply(this, arguments)
            } else {
                b.error("Method " + c + " does not exist")
            }
        }
    }
})(jQuery);;