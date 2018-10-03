<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FlowersController extends Controller
{
    public function index()
    {
        return view('flowers.index');
    }
}
