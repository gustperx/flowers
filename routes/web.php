<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::prefix('flowers')->group(function () {

    Route::get('/', 'FlowersController@index');
});

Route::post('product/index/{id}', function ($id) {

    return response(['id' => $id]);
});

Route::post('sort/html', function (\Illuminate\Http\Request $request) {

    //return response(['request' => $request->all()], 200);

    switch ($request->get('type')) {

        case 'foliage':
            return response(['request' => $request->all(), 'case' => 'foliage'], 200);
            break;

        case 'container':
            return response(['request' => $request->all(), 'case' => 'container'], 200);
            break;

        case 'sundry':
            return response(['request' => $request->all(), 'case' => 'sundry'], 200);
            break;

        case 'stem':
            return response(['request' => $request->all(), 'case' => 'stem', 'sort' => $request->get('sort'), 'filter' => $request->get('filter')], 200);
            break;

        default:
            return response(['request' => $request->all(), 'case' => 'default'], 200);

    }

    //return response(['response' => 'server response']);

    //return response('<div class="stem slider"><div class="slideBlock"><div class="product25 productWrap"><div class="productImg"><img src="media/images/products/gb_AlstroemeriaPink-0.png" alt="Alstroemeria (Pink)" class="cImg pstem" /></div><div class="productName">Alstroemeria (Pink)</div></div><div class="product29 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationGreen-0.png" alt="Carnation (Green)" class="cImg pstem" /></div><div class="productName">Carnation (Green)</div></div><div class="product190 productWrap"><div class="productImg"><img src="media/images/products/gb_Carnation-0.png" alt="Carnation (Orange)" class="cImg pstem" /></div><div class="productName">Carnation (Orange)</div></div><div class="product4 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationWhite-0.png" alt="Carnation (White)" class="cImg pstem" /></div><div class="productName">Carnation (White)</div></div><div class="product191 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationYellow-0.png" alt="Carnation (Yellow)" class="cImg pstem" /></div><div class="productName">Carnation (Yellow)</div></div><div class="product43 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayPink-0.png" alt="Carnation spray (Pink)" class="cImg pstem" /></div><div class="productName">Carnation spray (Pink)</div></div></div><div class="slideBlock"><div class="product198 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationsprayWhite-0.png" alt="Carnation spray (White)" class="cImg pstem" /></div><div class="productName">Carnation spray (White)</div></div><div class="product197 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumRed-0.png" alt="Chrysanthemum (Red)" class="cImg pstem" /></div><div class="productName">Chrysanthemum (Red)</div></div><div class="product5 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumBloomWhite-0.png" alt="Chrysanthemum Bloom (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum Bloom (White)</div></div><div class="product196 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayCream-0.png" alt="Chrysanthemum spray (Cream)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Cream)</div></div><div class="product44 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayGreen-0.png" alt="Chrysanthemum spray (Green)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (Green)</div></div><div class="product45 productWrap"><div class="productImg"><img src="media/images/products/gb_ChrysanthemumsprayWhite-0.png" alt="Chrysanthemum spray (White)" class="cImg pstem" /></div><div class="productName">Chrysanthemum spray (White)</div></div></div><div class="slideBlock"><div class="product6 productWrap"><div class="productImg"><img src="media/images/products/gb_EryngiumBlue-0.png" alt="Eryngium (Blue)" class="cImg pstem" /></div><div class="productName">Eryngium (Blue)</div></div><div class="product199 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaPurple-0.png" alt="Freesia (Lilac)" class="cImg pstem" /></div><div class="productName">Freesia (Lilac)</div></div><div class="product200 productWrap"><div class="productImg"><img src="media/images/products/gb_FreesiaYellow-0.png" alt="Freesia (Yellow)" class="cImg pstem" /></div><div class="productName">Freesia (Yellow)</div></div><div class="product30 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiCerise-0.png" alt="Germini (Cerise)" class="cImg pstem" /></div><div class="productName">Germini (Cerise)</div></div><div class="product193 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiOrange-0.png" alt="Germini (Orange)" class="cImg pstem" /></div><div class="productName">Germini (Orange)</div></div><div class="product31 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPeach-0.png" alt="Germini (Peach)" class="cImg pstem" /></div><div class="productName">Germini (Peach)</div></div></div><div class="slideBlock"><div class="product32 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiPink-0.png" alt="Germini (Pink)" class="cImg pstem" /></div><div class="productName">Germini (Pink)</div></div><div class="product33 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiWhite-0.png" alt="Germini (White)" class="cImg pstem" /></div><div class="productName">Germini (White)</div></div><div class="product194 productWrap"><div class="productImg"><img src="media/images/products/gb_GerminiYellow-0.png" alt="Germini (Yellow)" class="cImg pstem" /></div><div class="productName">Germini (Yellow)</div></div><div class="product34 productWrap"><div class="productImg"><img src="media/images/products/gb_GypsophilaWhite-0.png" alt="Gypsophila (White)" class="cImg pstem" /></div><div class="productName">Gypsophila (White)</div></div><div class="product16 productWrap"><div class="productImg"><img src="media/images/products/gb_IrisBlue-0.png" alt="Iris (Blue)" class="cImg pstem" /></div><div class="productName">Iris (Blue)</div></div><div class="product26 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticCream-0.png" alt="Lily Asiatic (Cream) " class="cImg pstem" /></div><div class="productName">Lily Asiatic (Cream) </div></div></div><div class="slideBlock"><div class="product192 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticOrange-0.png" alt="Lily Asiatic (Orange)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Orange)</div></div><div class="product27 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticWhite-0.png" alt="Lily Asiatic (White)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (White)</div></div><div class="product28 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyAsiaticYellow-0.png" alt="Lily Asiatic (Yellow)" class="cImg pstem" /></div><div class="productName">Lily Asiatic (Yellow)</div></div><div class="product37 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalPink-0.png" alt="Lily Oriental (Pink)" class="cImg pstem" /></div><div class="productName">Lily Oriental (Pink)</div></div><div class="product38 productWrap"><div class="productImg"><img src="media/images/products/gb_LilyOrientalWhite-0.png" alt="Lily Oriental (White)" class="cImg pstem" /></div><div class="productName">Lily Oriental (White)</div></div><div class="product10 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusLilac-0.png" alt="Lisianthus (Lilac)" class="cImg pstem" /></div><div class="productName">Lisianthus (Lilac)</div></div></div><div class="slideBlock"><div class="product35 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusPink-0.png" alt="Lisianthus (Pink)" class="cImg pstem" /></div><div class="productName">Lisianthus (Pink)</div></div><div class="product36 productWrap"><div class="productImg"><img src="media/images/products/gb_LisianthusWhite-0.png" alt="Lisianthus (White)" class="cImg pstem" /></div><div class="productName">Lisianthus (White)</div></div><div class="product13 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseRed-0.png" alt="Rose (Red)" class="cImg pstem" /></div><div class="productName">Rose (Red)</div></div><div class="product202 productWrap"><div class="productImg"><img src="media/images/products/gb_RoseYellow-0.png" alt="Rose (Yellow)" class="cImg pstem" /></div><div class="productName">Rose (Yellow)</div></div><div class="product39 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadCerise-0.png" alt="Rose large head (Cerise)" class="cImg pstem" /></div><div class="productName">Rose large head (Cerise)</div></div><div class="product40 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadOrange-0.png" alt="Rose large head (Orange)" class="cImg pstem" /></div><div class="productName">Rose large head (Orange)</div></div></div><div class="slideBlock"><div class="product41 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadPink-0.png" alt="Rose large head (Pink)" class="cImg pstem" /></div><div class="productName">Rose large head (Pink)</div></div><div class="product42 productWrap"><div class="productImg"><img src="media/images/products/gb_RoselargeheadWhite-0.png" alt="Rose large head (White)" class="cImg pstem" /></div><div class="productName">Rose large head (White)</div></div><div class="product201 productWrap"><div class="productImg"><img src="media/images/products/gb_SeptemberFlowerBlue-0.png" alt="September Flower (Blue)" class="cImg pstem" /></div><div class="productName">September Flower (Blue)</div></div><div class="product195 productWrap"><div class="productImg"><img src="media/images/products/gb_Solidago-0.png" alt="Solidago" class="cImg pstem" /></div><div class="productName">Solidago</div></div><div class="product2 productWrap"><div class="productImg"><img src="media/images/products/gb_CarnationRed-0.png" alt="Spray Carnation (Red)" class="cImg pstem" /></div><div class="productName">Spray Carnation (Red)</div></div><div class="product46 productWrap"><div class="productImg"><img src="media/images/products/gb_StaticeBlue-0.png" alt="Statice (Blue)" class="cImg pstem" /></div><div class="productName">Statice (Blue)</div></div></div></div>');
});


Route::post('store', function (\Illuminate\Http\Request $request) {

    dd($request->all());
});