<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;

class VideosController extends Controller
{
    public function get()
    {
        $files = File::allFiles(dirname(__DIR__,3).'/public_html/uploads');
        return collect($files)->map(function ($video) {
           return $video->getFileName();
        });
    }
}
