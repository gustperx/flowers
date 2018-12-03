@extends('layouts.app')

@section('content')

    <div id="mainContent" class="configurator">

        <div id="account">
            <div class="hintsIcon">
                <span class="rollover"><img src="/media/images/leaf.png" alt="Hints & Tips" /></span>
                Hints & Tips
                <span><img src="/media/images/configurator/line.gif" alt="Line" /></span>
            </div>
            <div class="galleryIcon">
                <span class="rollover"><img src="/media/images/configurator/gallery.png" alt="Gallery" /></span>
                Gallery
                <span><img src="/media/images/configurator/line.gif" alt="Line" /></span>
            </div>
            <div class="signinIconC"><span><img src="/media/images/signin.png" alt="Sign In" /></span>
                <a href="/user/login" class="login">Sign In</a>    </div>
            <div class="helpIcon">
                <span><img src="/media/images/configurator/line.gif" alt="Line" /></span>
                <span class="rollover"><img src="/media/images/configurator/help.png" alt="Help" /></span>
                Help  </div>
        </div>

        <div id="bouquetWrap">
            <div class="boxWrap">
                <div class="stemBlockWidthAnchor menuOpen">
                    <a href="#" id="viewMenu">
                        <span class="menuHeading">Main Menu</span>
                        <span class="menuSub">Flowers - Foliage - Vases - Accessories</span>
                        <span class="arrow">&nbsp;</span>
                    </a></div>
                <div id="filterInfo">
                    <div class="fbchoice">Filter by: <b><span id="filterByChoice"></span></b></div>
                    <div class="sbchoice">Sort by: <b><span id="sortByChoice">A - Z</span></b></div>
                </div>
                <div class="hline">
                    <img src="/media/images/configurator/hline.gif" />
                </div>
                <div id="itemWrapper" class="stem slider">
                    <div class="stem slider"><div class="slideBlock"><div class="product25 productWrap"><div class="productImg"><img src="/media/images/products/gb_AlstroemeriaPink-0.png" alt="Alstroemeria (Pink)" class="cImg pstem" /></div><div class="productName">Alstroemeria (Pink)</div></div><div class="product29 productWrap"><div class="productImg"><img src="/media/images/products/gb_CarnationGreen-0.png" alt="Carnation (Green)" class="cImg pstem" /></div><div class="productName">Carnation (Green)</div></div><div class="product190 productWrap"><div class="productImg"><img src="/media/images/products/gb_Carnation-0.png" alt="Carnation (Orange)" class="cImg pstem" /></div><div class="productName">Carnation (Orange)</div></div><div class="product4 productWrap"><div class="productImg"><img src="/media/images/products/gb_CarnationWhite-0.png" alt="Carnation (White)" class="cImg pstem" /></div><div class="productName">Carnation (White)</div></div><div class="product191 productWrap"><div class="productImg"><img src="/media/images/products/gb_CarnationYellow-0.png" alt="Carnation (Yellow)" class="cImg pstem" /></div><div class="productName">Carnation (Yellow)</div></div><div class="product43 productWrap"><div class="productImg"><img src="/media/images/products/gb_CarnationsprayPink-0.png" alt="Carnation spray (Pink)" class="cImg pstem" /></div><div class="productName">Carnation spray (Pink)</div></div></div><div class="slideBlock"><div class="product198 productWrap"><div class="productImg"><img src="/media/images/products/gb_CarnationsprayWhite-0.png" alt="Carnation spray (White)" class="cImg pstem" /></div><div class="productName">Carnation spray (White)</div></div><div class="product197 productWrap"><div class="productImg"><img src="/media/images/products/gb_ChrysanthemumRed-0.png" alt="Chrysanthemum (Red)" class="cImg pstem" /></div><div class="productName">Chrysanthemum (Red)</div></div><div class="product5 productWrap"><div class="productImg"><img src="/media/images/products/gb_ChrysanthemumBloomWhite-0.png" alt="Chrysanthemum Bloom (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum Bloom (White)</div></div><div class="product196 productWrap"><div class="productImg"><img src="/media/images/products/gb_ChrysanthemumsprayCream-0.png" alt="Chrysanthemum spray (Cream)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Cream)</div></div><div class="product44 productWrap"><div class="productImg"><img src="/media/images/products/gb_ChrysanthemumsprayGreen-0.png" alt="Chrysanthemum spray (Green)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Green)</div></div><div class="product45 productWrap"><div class="productImg"><img src="/media/images/products/gb_ChrysanthemumsprayWhite-0.png" alt="Chrysanthemum spray (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (White)</div></div></div><div class="slideBlock"><div class="product6 productWrap"><div class="productImg"><img src="/media/images/products/gb_EryngiumBlue-0.png" alt="Eryngium (Blue)" class="cImg pstem" /></div><div class="productName">Eryngium (Blue)</div></div><div class="product199 productWrap"><div class="productImg"><img src="/media/images/products/gb_FreesiaPurple-0.png" alt="Freesia (Lilac)" class="cImg pstem" /></div><div class="productName">Freesia (Lilac)</div></div><div class="product200 productWrap"><div class="productImg"><img src="/media/images/products/gb_FreesiaYellow-0.png" alt="Freesia (Yellow)" class="cImg pstem" /></div><div class="productName">Freesia (Yellow)</div></div><div class="product30 productWrap"><div class="productImg"><img src="/media/images/products/gb_GerminiCerise-0.png" alt="Germini (Cerise)" class="cImg pstem" /></div><div class="productName">Germini (Cerise)</div></div><div class="product193 productWrap"><div class="productImg"><img src="/media/images/products/gb_GerminiOrange-0.png" alt="Germini (Orange)" class="cImg pstem" /></div><div class="productName">Germini (Orange)</div></div><div class="product31 productWrap"><div class="productImg"><img src="/media/images/products/gb_GerminiPeach-0.png" alt="Germini (Peach)" class="cImg pstem" /></div><div class="productName">Germini (Peach)</div></div></div><div class="slideBlock"><div class="product32 productWrap"><div class="productImg"><img src="/media/images/products/gb_GerminiPink-0.png" alt="Germini (Pink)" class="cImg pstem" /></div><div class="productName">Germini (Pink)</div></div><div class="product33 productWrap"><div class="productImg"><img src="/media/images/products/gb_GerminiWhite-0.png" alt="Germini (White)" class="cImg pstem" /></div><div class="productName">Germini (White)</div></div><div class="product194 productWrap"><div class="productImg"><img src="/media/images/products/gb_GerminiYellow-0.png" alt="Germini (Yellow)" class="cImg pstem" /></div><div class="productName">Germini (Yellow)</div></div><div class="product34 productWrap"><div class="productImg"><img src="/media/images/products/gb_GypsophilaWhite-0.png" alt="Gypsophila (White)" class="cImg pstem" /></div><div class="productName">Gypsophila (White)</div></div><div class="product16 productWrap"><div class="productImg"><img src="/media/images/products/gb_IrisBlue-0.png" alt="Iris (Blue)" class="cImg pstem" /></div><div class="productName">Iris (Blue)</div></div><div class="product26 productWrap"><div class="productImg"><img src="/media/images/products/gb_LilyAsiaticCream-0.png" alt="Lily Asiatic (Cream) " class="cImg pstem" /></div><div class="productName">Lily Asiatic (Cream) </div></div></div><div class="slideBlock"><div class="product192 productWrap"><div class="productImg"><img src="/media/images/products/gb_LilyAsiaticOrange-0.png" alt="Lily Asiatic (Orange)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Orange)</div></div><div class="product27 productWrap"><div class="productImg"><img src="/media/images/products/gb_LilyAsiaticWhite-0.png" alt="Lily Asiatic (White)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (White)</div></div><div class="product28 productWrap"><div class="productImg"><img src="/media/images/products/gb_LilyAsiaticYellow-0.png" alt="Lily Asiatic (Yellow)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Yellow)</div></div><div class="product37 productWrap"><div class="productImg"><img src="/media/images/products/gb_LilyOrientalPink-0.png" alt="Lily Oriental (Pink)" class="cImg pstem" /></div><div class="productName">Lily Oriental (Pink)</div></div><div class="product38 productWrap"><div class="productImg"><img src="/media/images/products/gb_LilyOrientalWhite-0.png" alt="Lily Oriental (White)" class="cImg pstem" /></div><div class="productName">Lily Oriental (White)</div></div><div class="product10 productWrap"><div class="productImg"><img src="/media/images/products/gb_LisianthusLilac-0.png" alt="Lisianthus (Lilac)" class="cImg pstem" /></div><div class="productName">Lisianthus (Lilac)</div></div></div><div class="slideBlock"><div class="product35 productWrap"><div class="productImg"><img src="/media/images/products/gb_LisianthusPink-0.png" alt="Lisianthus (Pink)" class="cImg pstem" /></div><div class="productName">Lisianthus (Pink)</div></div><div class="product36 productWrap"><div class="productImg"><img src="/media/images/products/gb_LisianthusWhite-0.png" alt="Lisianthus (White)" class="cImg pstem" /></div><div class="productName">Lisianthus (White)</div></div><div class="product13 productWrap"><div class="productImg"><img src="/media/images/products/gb_RoseRed-0.png" alt="Rose (Red)" class="cImg pstem" /></div><div class="productName">Rose (Red)</div></div><div class="product202 productWrap"><div class="productImg"><img src="/media/images/products/gb_RoseYellow-0.png" alt="Rose (Yellow)" class="cImg pstem" /></div><div class="productName">Rose (Yellow)</div></div><div class="product39 productWrap"><div class="productImg"><img src="/media/images/products/gb_RoselargeheadCerise-0.png" alt="Rose large head (Cerise)" class="cImg pstem" /></div><div class="productName">Rose large head (Cerise)</div></div><div class="product40 productWrap"><div class="productImg"><img src="/media/images/products/gb_RoselargeheadOrange-0.png" alt="Rose large head (Orange)" class="cImg pstem" /></div><div class="productName">Rose large head (Orange)</div></div></div><div class="slideBlock"><div class="product41 productWrap"><div class="productImg"><img src="/media/images/products/gb_RoselargeheadPink-0.png" alt="Rose large head (Pink)" class="cImg pstem" /></div><div class="productName">Rose large head (Pink)</div></div><div class="product42 productWrap"><div class="productImg"><img src="/media/images/products/gb_RoselargeheadWhite-0.png" alt="Rose large head (White)" class="cImg pstem" /></div><div class="productName">Rose large head (White)</div></div><div class="product201 productWrap"><div class="productImg"><img src="/media/images/products/gb_SeptemberFlowerBlue-0.png" alt="September Flower (Blue)" class="cImg pstem" /></div><div class="productName">September Flower (Blue)</div></div><div class="product195 productWrap"><div class="productImg"><img src="/media/images/products/gb_Solidago-0.png" alt="Solidago" class="cImg pstem" /></div><div class="productName">Solidago</div></div><div class="product2 productWrap"><div class="productImg"><img src="/media/images/products/gb_CarnationRed-0.png" alt="Spray Carnation (Red)" class="cImg pstem" /></div><div class="productName">Spray Carnation (Red)</div></div><div class="product46 productWrap"><div class="productImg"><img src="/media/images/products/gb_StaticeBlue-0.png" alt="Statice (Blue)" class="cImg pstem" /></div><div class="productName">Statice (Blue)</div></div></div></div>    </div>
                <div class="hline">
                    <img src="/media/images/configurator/hline.gif" />
                </div>
            </div>

            <div id='canvasWrapper'></div>

            <div id="byobtotals">
                <div class="totalCostWrap">
                    <div class="creativeCharge">
                        <b>Total</b> <img src="/media/images/configurator/creativecharge.png" alt="Florist Creative Charge" />
                    </div>
                    <div class="totalPrice Louisiana">
                        &#163;<span id="pounds"></span><span id="pence"></span>
                    </div>
                </div>
            </div>

            <div id='dataUrlImg'>
                <button type="button" id="share" class="silver">Share</button>
                <button type="button" id="save" class="silver">Save</button>

                <span class="arrowWrap gold bouquetConfBuy">
                    <span class="basketIcon"><img src="/media/images/configurator/basket.png" alt="Basket"/></span>
                    <button type="button" id="buy" class="arrowText">Buy</button>
                    <span class="arrowTip">&nbsp;</span>
    	        </span>
            </div>

            <div id="xmlBuild"></div>

            <div id="saveinfo">
                <form action="/" method="post" accept-charset="utf-8" enctype="multipart/form-data">
                    <input type="hidden" name="build" value="0" id="build">
                    <input type="hidden" name="buildImg" value="0" id="buildImg">
                    <input type="hidden" name="derivation" value="0" id="derivation">
                </form>
            </div>

            <div id="sortoptions">
                <div class="stemOptions accordianBlock">
                    <a href="stem" class="topLevelButton"><span class="flower-icon">Flowers</span><span class="secondLevelText">Flowers</span><span class="arrow">&nbsp;</span></a>
                </div>

                <div class="flowersOptions hideBlock">
                    <span class="filterBy">Filter by:</span>
                    <div class="filerWrap">

                        <div class="showAllFlowers secondLevelButton">
                            <a href="#"><span class="showall-icon">Show All Flowers</span><span class="thirdLevelText">Show All Flowers</span><span class="arrow">&nbsp;</span></a>
                        </div>

                        <div>
                            <div class="filterByName secondLevelButton">
                                <a href="#" class="topLevelAnchor"><span class="letters-icon">Name</span><span class="thirdLevelText">Name</span><span class="arrow">&nbsp;</span></a>
                            </div>
                            <div class="nameBlock hideBlock">
                                <div class="letterBlock">
                                    <span class="A">A</span><span class="unused">B</span><span class="C">C</span><span class="unused">D</span><span class="E">E</span><span class="F">F</span><span class="G">G</span><span class="unused">H</span><span class="I">I</span><span class="unused">J</span><span class="unused">K</span><span class="L">L</span><span class="unused">M</span><span class="unused">N</span><span class="unused">O</span><span class="unused">P</span><span class="unused">Q</span><span class="R">R</span><span class="S">S</span><span class="unused">T</span><span class="unused">U</span><span class="unused">V</span><span class="unused">W</span><span class="unused">X</span><span class="unused">Y</span><span class="unused">Z</span>            </div>
                                <div class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></div>
                            </div>
                        </div>

                        <div>
                            <div class="filterByColour secondLevelButton">
                                <a href="#" class="topLevelAnchor"><span class="colour-icon">Colour</span><span class="thirdLevelText">Colour</span><span class="arrow">&nbsp;</span></a>
                            </div>
                            <div class="colourBlock hideBlock">
                                <div class="flowerColourBlock">
                                    <a href="#" class="blue">Blue</a><a href="#" class="green">Green</a><a href="#" class="orange">Orange</a><a href="#" class="pink">Pink</a><a href="#" class="purple">Purple</a><a href="#" class="red">Red</a><a href="#" class="white">White</a><a href="#" class="yellow">Yellow</a>              <span class="colourCenter">center</span>
                                </div>
                                <div class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></div>
                            </div>
                        </div>

                        <div>
                            <div class="filterByMeaning secondLevelButton">
                                <a href="#" class="topLevelAnchor"><span class="meaning-icon">Meaning</span><span class="thirdLevelText">Meaning</span><span class="arrow">&nbsp;</span></a>
                            </div>
                            <div class="meaningBlock hideBlock">
                                <div class="meaningBlockList">
                                    <ul>
                                        <li><a href="#" class="4">Beauty</a></li><li><a href="#" class="3">Devotion</a></li><li><a href="#" class="1">Friendship</a></li><li><a href="#" class="5">Happiness / Joy</a></li><li><a href="#" class="2">Love</a></li><li><a href="#" class="6">Thank You</a></li>              </ul>
                                </div>
                                <div class="close"><span class="closeText">Close</span><img class="closeBtn" alt="close" src="/media/images/configurator/menu/closeBtn.gif" /></div>
                            </div>
                        </div>

                        <div class="sortBy secondLevelButton">
                            <form action="">
                                <label for="sortby">Sort by:</label>
                                <select id="sortby" name="sort">
                                    <option value="name">A - Z</option>
                                    <option value="price_asc">&#163; - Low to High</option>
                                    <option value="price_desc">&#163; - High to Low</option>
                                </select>
                            </form>
                        </div>

                    </div>
                </div>

                <div class="foliageOptions">
                    <a href="foliage" class="topLevelButton"><span class="foliage-icon">Foliage</span><span class="secondLevelText">Foliage</span><span class="arrow">&nbsp;</span></a>
                </div>

                <div class="containerOptions">
                    <a href="container" class="topLevelButton"><span class="vases-icon">Vases & Gift Wrap</span><span class="secondLevelText">Vases & Gift Wrap</span><span class="arrow">&nbsp;</span></a>
                </div>

                <div class="sundryOptions">
                    <a href="sundry" class="topLevelButton"><span class="accessories-icon">Accessories</span><span class="secondLevelText">Accessories</span><span class="arrow">&nbsp;</span></a>
                </div>

            </div>
        </div>

        <div class="pointer"></div>

        <div id="productPopUp"></div>

        <div id="loader">
            <div id="loadImg"></div>
            <div id="loadTxt">
                <div class="loadHeader Louisiana">
                    Loading    </div>
                <div class="loadMessage Louisiana">
                    Just a moment please.<br />
                    We are loading My Interflora Creation, get ready to create...    </div>
            </div>
        </div>

    </div>

@stop

@section('custom_css')
    <!-- Configurator -->
    <link rel="stylesheet" href="{{ asset('css/colorbox/colorbox.css') }}">
@stop

@section('scriptBottom')

    <!-- JQuery -->
    <script src="{{ asset('js/jquery/jquery-3.3.1.min.js') }}"></script>

    <!-- fixed TypeError: jQuery.browser is undefined (jquery 3) -->
    <!--<script src="{{ asset('js/jquery/jquery-browser.js') }}"></script>-->
    <!-- fixed TypeError: jQuery.browser is undefined (jquery 3) -->

    <!-- JQuery UI -->
    <script src="{{ asset('js/jquery/jquery-ui/jquery-ui.min.js') }}"></script>

    <!-- Kinetic -->
    <script src="{{ asset('js/kinetic/kinetic-v4.5.4.js') }}"></script>
    <!--<script src="{{ asset('js/kinetic/kinetic-v5.1.0.min.js') }}"></script>-->

    <!-- ColorBox -->
    <script src="{{ asset('js/colorbox/jquery.colorbox-v1.6.4.min.js') }}"></script>

    <!-- Scroll -->
    <script src="{{ asset('js/configurator/scroll.js') }}"></script>

    <!-- Configurator JS OK -->
    <script src="{{ asset('js/configurator/configurator.js') }}"></script>

    <!-- // Laravel Ajax Token CSRF -->
    <script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>

    <script type="text/javascript">
        var thisimage, drawing=true, totalflowers=0, totalcost=0, items, inventory = [], stage, background, dusty, nextfree, selecteditem, start = 0, lastfilter, stemcount=0, creativecharge, dragging, firstclick=true, last, diff, exited, thisflower;

        $.colorbox({
            inline: true,
            href: "#loader",
            overlayClose: false,
            escKey: false,
            close: "",
            transition: 'none',
            onOpen: function(){
                $('#loadImg').html('<img src="/media/images/configurator/InterfloraLoader.gif" alt="Loading" />');
                $('#cboxOverlay').addClass("helpOverlaySettingsBackground");
            },
            onClosed: function(){
                $('#cboxOverlay').removeClass("helpOverlaySettingsBackground");
                $('#colorbox').removeClass("helpOverlaySettingsBox");
                $('#cboxClose').removeClass("helpOverlaySettingsClose");
            }
        });

        var creativecharge1 = 15;
        var creativecharge2 = 20;
        var creativechargeboundary = 15;
        var minimumstems = 6;
        var minimumfoliage = 0;
        var minimumvalue = 30;
        var defaultcontainer = "product49";
        var defaultsundry = "product161";
        var optiontobuy = 1;
        var maxcontainersize = 44;

        var images = new Object();
        images.product25 = [];for (i = 0; i < 5; i++) {
            images.product25[i] = new Image();
            images.product25[i].src = "/media/images/products/gb_AlstroemeriaPink-" + (i+1) + ".png";
            images.product25[i].pvol = 1;
            images.product25[i].pcost = 120;
            images.product25[i].pvatrate = 0.00;
            images.product25[i].fullname = "Alstroemeria (Pink)";
        }
        images.product29 = [];for (i = 0; i < 5; i++) {
            images.product29[i] = new Image();
            images.product29[i].src = "/media/images/products/gb_CarnationGreen-" + (i+1) + ".png";
            images.product29[i].pvol = 1;
            images.product29[i].pcost = 105;
            images.product29[i].pvatrate = 0.00;
            images.product29[i].fullname = "Carnation (Green)";
            console.log(images.product29[1]);
        }
        images.product190 = [];for (i = 0; i < 5; i++) {
            images.product190[i] = new Image();
            images.product190[i].src = "/media/images/products/gb_Carnation-" + (i+1) + ".png";
            images.product190[i].pvol = 1;
            images.product190[i].pcost = 105;
            images.product190[i].pvatrate = 0.00;
            images.product190[i].fullname = "Carnation (Orange)";
        }
        images.product4 = [];for (i = 0; i < 5; i++) {
            images.product4[i] = new Image();
            images.product4[i].src = "/media/images/products/gb_CarnationWhite-" + (i+1) + ".png";
            images.product4[i].pvol = 1;
            images.product4[i].pcost = 105;
            images.product4[i].pvatrate = 0.00;
            images.product4[i].fullname = "Carnation (White)";
        }
        images.product191 = [];for (i = 0; i < 5; i++) {
            images.product191[i] = new Image();
            images.product191[i].src = "/media/images/products/gb_CarnationYellow-" + (i+1) + ".png";
            images.product191[i].pvol = 1;
            images.product191[i].pcost = 105;
            images.product191[i].pvatrate = 0.00;
            images.product191[i].fullname = "Carnation (Yellow)";
        }
        images.product43 = [];for (i = 0; i < 5; i++) {
            images.product43[i] = new Image();
            images.product43[i].src = "/media/images/products/gb_CarnationsprayPink-" + (i+1) + ".png";
            images.product43[i].pvol = 1;
            images.product43[i].pcost = 96;
            images.product43[i].pvatrate = 0.00;
            images.product43[i].fullname = "Carnation spray (Pink)";
        }
        images.product198 = [];for (i = 0; i < 5; i++) {
            images.product198[i] = new Image();
            images.product198[i].src = "/media/images/products/gb_CarnationsprayWhite-" + (i+1) + ".png";
            images.product198[i].pvol = 1;
            images.product198[i].pcost = 96;
            images.product198[i].pvatrate = 0.00;
            images.product198[i].fullname = "Carnation spray (White)";
        }
        images.product197 = [];for (i = 0; i < 5; i++) {
            images.product197[i] = new Image();
            images.product197[i].src = "/media/images/products/gb_ChrysanthemumRed-" + (i+1) + ".png";
            images.product197[i].pvol = 1;
            images.product197[i].pcost = 126;
            images.product197[i].pvatrate = 0.00;
            images.product197[i].fullname = "Chrysanthemum (Red)";
        }
        images.product5 = [];for (i = 0; i < 5; i++) {
            images.product5[i] = new Image();
            images.product5[i].src = "/media/images/products/gb_ChrysanthemumBloomWhite-" + (i+1) + ".png";
            images.product5[i].pvol = 1;
            images.product5[i].pcost = 195;
            images.product5[i].pvatrate = 0.00;
            images.product5[i].fullname = "Chrysanthemum Bloom (White)";
        }
        images.product196 = [];for (i = 0; i < 5; i++) {
            images.product196[i] = new Image();
            images.product196[i].src = "/media/images/products/gb_ChrysanthemumsprayCream-" + (i+1) + ".png";
            images.product196[i].pvol = 1;
            images.product196[i].pcost = 126;
            images.product196[i].pvatrate = 0.00;
            images.product196[i].fullname = "Chrysanthemum spray (Cream)";
        }
        images.product44 = [];for (i = 0; i < 5; i++) {
            images.product44[i] = new Image();
            images.product44[i].src = "/media/images/products/gb_ChrysanthemumsprayGreen-" + (i+1) + ".png";
            images.product44[i].pvol = 1;
            images.product44[i].pcost = 126;
            images.product44[i].pvatrate = 0.00;
            images.product44[i].fullname = "Chrysanthemum spray (Green)";
        }
        images.product45 = [];for (i = 0; i < 5; i++) {
            images.product45[i] = new Image();
            images.product45[i].src = "/media/images/products/gb_ChrysanthemumsprayWhite-" + (i+1) + ".png";
            images.product45[i].pvol = 1;
            images.product45[i].pcost = 126;
            images.product45[i].pvatrate = 0.00;
            images.product45[i].fullname = "Chrysanthemum spray (White)";
        }
        images.product6 = [];for (i = 0; i < 5; i++) {
            images.product6[i] = new Image();
            images.product6[i].src = "/media/images/products/gb_EryngiumBlue-" + (i+1) + ".png";
            images.product6[i].pvol = 1;
            images.product6[i].pcost = 240;
            images.product6[i].pvatrate = 0.00;
            images.product6[i].fullname = "Eryngium (Blue)";
        }
        images.product199 = [];for (i = 0; i < 5; i++) {
            images.product199[i] = new Image();
            images.product199[i].src = "/media/images/products/gb_FreesiaPurple-" + (i+1) + ".png";
            images.product199[i].pvol = 1;
            images.product199[i].pcost = 105;
            images.product199[i].pvatrate = 0.00;
            images.product199[i].fullname = "Freesia (Lilac)";
        }
        images.product200 = [];for (i = 0; i < 5; i++) {
            images.product200[i] = new Image();
            images.product200[i].src = "/media/images/products/gb_FreesiaYellow-" + (i+1) + ".png";
            images.product200[i].pvol = 1;
            images.product200[i].pcost = 105;
            images.product200[i].pvatrate = 0.00;
            images.product200[i].fullname = "Freesia (Yellow)";
        }
        images.product30 = [];for (i = 0; i < 5; i++) {
            images.product30[i] = new Image();
            images.product30[i].src = "/media/images/products/gb_GerminiCerise-" + (i+1) + ".png";
            images.product30[i].pvol = 1;
            images.product30[i].pcost = 105;
            images.product30[i].pvatrate = 0.00;
            images.product30[i].fullname = "Germini (Cerise)";
        }
        images.product193 = [];for (i = 0; i < 5; i++) {
            images.product193[i] = new Image();
            images.product193[i].src = "/media/images/products/gb_GerminiOrange-" + (i+1) + ".png";
            images.product193[i].pvol = 1;
            images.product193[i].pcost = 105;
            images.product193[i].pvatrate = 0.00;
            images.product193[i].fullname = "Germini (Orange)";
        }
        images.product31 = [];for (i = 0; i < 5; i++) {
            images.product31[i] = new Image();
            images.product31[i].src = "/media/images/products/gb_GerminiPeach-" + (i+1) + ".png";
            images.product31[i].pvol = 1;
            images.product31[i].pcost = 105;
            images.product31[i].pvatrate = 0.00;
            images.product31[i].fullname = "Germini (Peach)";
        }
        images.product32 = [];for (i = 0; i < 5; i++) {
            images.product32[i] = new Image();
            images.product32[i].src = "/media/images/products/gb_GerminiPink-" + (i+1) + ".png";
            images.product32[i].pvol = 1;
            images.product32[i].pcost = 105;
            images.product32[i].pvatrate = 0.00;
            images.product32[i].fullname = "Germini (Pink)";
        }
        images.product33 = [];for (i = 0; i < 5; i++) {
            images.product33[i] = new Image();
            images.product33[i].src = "/media/images/products/gb_GerminiWhite-" + (i+1) + ".png";
            images.product33[i].pvol = 1;
            images.product33[i].pcost = 105;
            images.product33[i].pvatrate = 0.00;
            images.product33[i].fullname = "Germini (White)";
        }
        images.product194 = [];for (i = 0; i < 5; i++) {
            images.product194[i] = new Image();
            images.product194[i].src = "/media/images/products/gb_GerminiYellow-" + (i+1) + ".png";
            images.product194[i].pvol = 1;
            images.product194[i].pcost = 105;
            images.product194[i].pvatrate = 0.00;
            images.product194[i].fullname = "Germini (Yellow)";
        }
        images.product34 = [];for (i = 0; i < 5; i++) {
            images.product34[i] = new Image();
            images.product34[i].src = "/media/images/products/gb_GypsophilaWhite-" + (i+1) + ".png";
            images.product34[i].pvol = 1;
            images.product34[i].pcost = 165;
            images.product34[i].pvatrate = 0.00;
            images.product34[i].fullname = "Gypsophila (White)";
        }
        images.product16 = [];for (i = 0; i < 5; i++) {
            images.product16[i] = new Image();
            images.product16[i].src = "/media/images/products/gb_IrisBlue-" + (i+1) + ".png";
            images.product16[i].pvol = 1;
            images.product16[i].pcost = 75;
            images.product16[i].pvatrate = 0.00;
            images.product16[i].fullname = "Iris (Blue)";
        }
        images.product26 = [];for (i = 0; i < 5; i++) {
            images.product26[i] = new Image();
            images.product26[i].src = "/media/images/products/gb_LilyAsiaticCream-" + (i+1) + ".png";
            images.product26[i].pvol = 2;
            images.product26[i].pcost = 225;
            images.product26[i].pvatrate = 0.00;
            images.product26[i].fullname = "Lily Asiatic (Cream) ";
        }
        images.product192 = [];for (i = 0; i < 5; i++) {
            images.product192[i] = new Image();
            images.product192[i].src = "/media/images/products/gb_LilyAsiaticOrange-" + (i+1) + ".png";
            images.product192[i].pvol = 2;
            images.product192[i].pcost = 225;
            images.product192[i].pvatrate = 0.00;
            images.product192[i].fullname = "Lily Asiatic (Orange)";
        }
        images.product27 = [];for (i = 0; i < 5; i++) {
            images.product27[i] = new Image();
            images.product27[i].src = "/media/images/products/gb_LilyAsiaticWhite-" + (i+1) + ".png";
            images.product27[i].pvol = 2;
            images.product27[i].pcost = 225;
            images.product27[i].pvatrate = 0.00;
            images.product27[i].fullname = "Lily Asiatic (White)";
        }
        images.product28 = [];for (i = 0; i < 5; i++) {
            images.product28[i] = new Image();
            images.product28[i].src = "/media/images/products/gb_LilyAsiaticYellow-" + (i+1) + ".png";
            images.product28[i].pvol = 2;
            images.product28[i].pcost = 225;
            images.product28[i].pvatrate = 0.00;
            images.product28[i].fullname = "Lily Asiatic (Yellow)";
        }
        images.product37 = [];for (i = 0; i < 5; i++) {
            images.product37[i] = new Image();
            images.product37[i].src = "/media/images/products/gb_LilyOrientalPink-" + (i+1) + ".png";
            images.product37[i].pvol = 2;
            images.product37[i].pcost = 405;
            images.product37[i].pvatrate = 0.00;
            images.product37[i].fullname = "Lily Oriental (Pink)";
        }
        images.product38 = [];for (i = 0; i < 5; i++) {
            images.product38[i] = new Image();
            images.product38[i].src = "/media/images/products/gb_LilyOrientalWhite-" + (i+1) + ".png";
            images.product38[i].pvol = 2;
            images.product38[i].pcost = 405;
            images.product38[i].pvatrate = 0.00;
            images.product38[i].fullname = "Lily Oriental (White)";
        }
        images.product10 = [];for (i = 0; i < 5; i++) {
            images.product10[i] = new Image();
            images.product10[i].src = "/media/images/products/gb_LisianthusLilac-" + (i+1) + ".png";
            images.product10[i].pvol = 1;
            images.product10[i].pcost = 210;
            images.product10[i].pvatrate = 0.00;
            images.product10[i].fullname = "Lisianthus (Lilac)";
        }
        images.product35 = [];for (i = 0; i < 5; i++) {
            images.product35[i] = new Image();
            images.product35[i].src = "/media/images/products/gb_LisianthusPink-" + (i+1) + ".png";
            images.product35[i].pvol = 1;
            images.product35[i].pcost = 210;
            images.product35[i].pvatrate = 0.00;
            images.product35[i].fullname = "Lisianthus (Pink)";
        }
        images.product36 = [];for (i = 0; i < 5; i++) {
            images.product36[i] = new Image();
            images.product36[i].src = "/media/images/products/gb_LisianthusWhite-" + (i+1) + ".png";
            images.product36[i].pvol = 1;
            images.product36[i].pcost = 210;
            images.product36[i].pvatrate = 0.00;
            images.product36[i].fullname = "Lisianthus (White)";
        }
        images.product13 = [];for (i = 0; i < 5; i++) {
            images.product13[i] = new Image();
            images.product13[i].src = "/media/images/products/gb_RoseRed-" + (i+1) + ".png";
            images.product13[i].pvol = 1;
            images.product13[i].pcost = 495;
            images.product13[i].pvatrate = 0.00;
            images.product13[i].fullname = "Rose (Red)";
        }
        images.product202 = [];for (i = 0; i < 5; i++) {
            images.product202[i] = new Image();
            images.product202[i].src = "/media/images/products/gb_RoseYellow-" + (i+1) + ".png";
            images.product202[i].pvol = 1;
            images.product202[i].pcost = 210;
            images.product202[i].pvatrate = 0.00;
            images.product202[i].fullname = "Rose (Yellow)";
        }
        images.product39 = [];for (i = 0; i < 5; i++) {
            images.product39[i] = new Image();
            images.product39[i].src = "/media/images/products/gb_RoselargeheadCerise-" + (i+1) + ".png";
            images.product39[i].pvol = 1;
            images.product39[i].pcost = 210;
            images.product39[i].pvatrate = 0.00;
            images.product39[i].fullname = "Rose large head (Cerise)";
        }
        images.product40 = [];for (i = 0; i < 5; i++) {
            images.product40[i] = new Image();
            images.product40[i].src = "/media/images/products/gb_RoselargeheadOrange-" + (i+1) + ".png";
            images.product40[i].pvol = 1;
            images.product40[i].pcost = 210;
            images.product40[i].pvatrate = 0.00;
            images.product40[i].fullname = "Rose large head (Orange)";
        }
        images.product41 = [];for (i = 0; i < 5; i++) {
            images.product41[i] = new Image();
            images.product41[i].src = "/media/images/products/gb_RoselargeheadPink-" + (i+1) + ".png";
            images.product41[i].pvol = 1;
            images.product41[i].pcost = 210;
            images.product41[i].pvatrate = 0.00;
            images.product41[i].fullname = "Rose large head (Pink)";
        }
        images.product42 = [];for (i = 0; i < 5; i++) {
            images.product42[i] = new Image();
            images.product42[i].src = "/media/images/products/gb_RoselargeheadWhite-" + (i+1) + ".png";
            images.product42[i].pvol = 1;
            images.product42[i].pcost = 210;
            images.product42[i].pvatrate = 0.00;
            images.product42[i].fullname = "Rose large head (White)";
        }
        images.product201 = [];for (i = 0; i < 5; i++) {
            images.product201[i] = new Image();
            images.product201[i].src = "/media/images/products/gb_SeptemberFlowerBlue-" + (i+1) + ".png";
            images.product201[i].pvol = 1;
            images.product201[i].pcost = 165;
            images.product201[i].pvatrate = 0.00;
            images.product201[i].fullname = "September Flower (Blue)";
        }
        images.product195 = [];for (i = 0; i < 5; i++) {
            images.product195[i] = new Image();
            images.product195[i].src = "/media/images/products/gb_Solidago-" + (i+1) + ".png";
            images.product195[i].pvol = 1;
            images.product195[i].pcost = 120;
            images.product195[i].pvatrate = 0.00;
            images.product195[i].fullname = "Solidago";
        }
        images.product2 = [];for (i = 0; i < 5; i++) {
            images.product2[i] = new Image();
            images.product2[i].src = "/media/images/products/gb_CarnationRed-" + (i+1) + ".png";
            images.product2[i].pvol = 1;
            images.product2[i].pcost = 105;
            images.product2[i].pvatrate = 0.00;
            images.product2[i].fullname = "Spray Carnation (Red)";
        }
        images.product46 = [];for (i = 0; i < 5; i++) {
            images.product46[i] = new Image();
            images.product46[i].src = "/media/images/products/gb_StaticeBlue-" + (i+1) + ".png";
            images.product46[i].pvol = 1;
            images.product46[i].pcost = 190;
            images.product46[i].pvatrate = 0.00;
            images.product46[i].fullname = "Statice (Blue)";
        }
        images.product19 = [];for (i = 0; i < 5; i++) {
            images.product19[i] = new Image();
            images.product19[i].src = "/media/images/products/gb_Aspidistraleaf-" + (i+1) + ".png";
            images.product19[i].pvol = 1;
            images.product19[i].pcost = 60;
            images.product19[i].pvatrate = 0.00;
            images.product19[i].fullname = "Aspidistra leaf";
        }
        images.product21 = [];for (i = 0; i < 5; i++) {
            images.product21[i] = new Image();
            images.product21[i].src = "/media/images/products/gb_EucalyptusCinerea-" + (i+1) + ".png";
            images.product21[i].pvol = 1;
            images.product21[i].pcost = 60;
            images.product21[i].pvatrate = 0.00;
            images.product21[i].fullname = "Eucalyptus (Cinerea)";
        }
        images.product20 = [];for (i = 0; i < 5; i++) {
            images.product20[i] = new Image();
            images.product20[i].src = "/media/images/products/gb_EucalyptusParvi-" + (i+1) + ".png";
            images.product20[i].pvol = 1;
            images.product20[i].pcost = 60;
            images.product20[i].pvatrate = 0.00;
            images.product20[i].fullname = "Eucalyptus (Parvi)";
        }
        images.product22 = [];for (i = 0; i < 5; i++) {
            images.product22[i] = new Image();
            images.product22[i].src = "/media/images/products/gb_PittosporumIlan-" + (i+1) + ".png";
            images.product22[i].pvol = 1;
            images.product22[i].pcost = 60;
            images.product22[i].pvatrate = 0.00;
            images.product22[i].fullname = "Pittosporum (Ilan)";
        }
        images.product23 = [];for (i = 0; i < 5; i++) {
            images.product23[i] = new Image();
            images.product23[i].src = "/media/images/products/gb_Salaltips-" + (i+1) + ".png";
            images.product23[i].pvol = 1;
            images.product23[i].pcost = 60;
            images.product23[i].pvatrate = 0.00;
            images.product23[i].fullname = "Salal tips";
        }
        images.product24 = [];for (i = 0; i < 5; i++) {
            images.product24[i] = new Image();
            images.product24[i].src = "/media/images/products/gb_SteelGrass-" + (i+1) + ".png";
            images.product24[i].pvol = 1;
            images.product24[i].pcost = 60;
            images.product24[i].pvatrate = 0.00;
            images.product24[i].fullname = "Steel Grass";
        }
        images.product49 = [];for (i = 0; i < 2; i++) {
            images.product49[i] = new Image();
            images.product49[i].src = "/media/images/products/gb_HandTied-" + (i+1) + ".png";
            images.product49[i].pvol = 44;
            images.product49[i].pcost = 0;
            images.product49[i].pvatrate = 0.00;
            images.product49[i].fullname = "Hand Tied";
            images.product49[i].pweight = 1;
            images.product49[i].bulky = 0;
            images.product49[i].fullname = "Hand Tied";
        }
        images.product50 = [];for (i = 0; i < 2; i++) {
            images.product50[i] = new Image();
            images.product50[i].src = "/media/images/products/gb_Nigella-" + (i+1) + ".png";
            images.product50[i].pvol = 24;
            images.product50[i].pcost = 799;
            images.product50[i].pvatrate = 0.00;
            images.product50[i].fullname = "Nigella Vase";
            images.product50[i].pweight = 2;
            images.product50[i].bulky = 1;
            images.product50[i].fullname = "Nigella Vase";
        }
        images.product51 = [];for (i = 0; i < 2; i++) {
            images.product51[i] = new Image();
            images.product51[i].src = "/media/images/products/gb_TallSlim-" + (i+1) + ".png";
            images.product51[i].pvol = 20;
            images.product51[i].pcost = 1199;
            images.product51[i].pvatrate = 0.00;
            images.product51[i].fullname = "Tall Slim Vase";
            images.product51[i].pweight = 1;
            images.product51[i].bulky = 0;
            images.product51[i].fullname = "Tall Slim Vase";
        }
        images.product161 = [];for (i = 0; i < 1; i++) {
            images.product161[i] = new Image();
            images.product161[i].src = "/media/images/products/gb_Ribbongold-" + (i+1) + ".png";
            images.product161[i].pvol = 0;
            images.product161[i].pcost = 0;
            images.product161[i].pvatrate = 0.00;
            images.product161[i].fullname = "Ribbon (gold)";
            images.product161[i].pweight = 0;
            images.product161[i].bulky = 0;
            images.product161[i].fullname = "Ribbon (gold)";
        }
        images.product163 = [];for (i = 0; i < 1; i++) {
            images.product163[i] = new Image();
            images.product163[i].src = "/media/images/products/gb_Ribbonpink-" + (i+1) + ".png";
            images.product163[i].pvol = 0;
            images.product163[i].pcost = 0;
            images.product163[i].pvatrate = 0.00;
            images.product163[i].fullname = "Ribbon (pink)";
            images.product163[i].pweight = 0;
            images.product163[i].bulky = 0;
            images.product163[i].fullname = "Ribbon (pink)";
        }
        images.product164 = [];for (i = 0; i < 1; i++) {
            images.product164[i] = new Image();
            images.product164[i].src = "/media/images/products/gb_Ribbonred-" + (i+1) + ".png";
            images.product164[i].pvol = 0;
            images.product164[i].pcost = 0;
            images.product164[i].pvatrate = 0.00;
            images.product164[i].fullname = "Ribbon (red)";
            images.product164[i].pweight = 0;
            images.product164[i].bulky = 0;
            images.product164[i].fullname = "Ribbon (red)";
        }

        $(window).on('load', function() {
            byobinit();
            loginOverlayConfigurator();
        });    </script>

    <script type="text/javascript">
        $(document).ready(function() {
            mainListeners();
            signinHovers();
        });
    </script>

@stop