<?php


namespace App\Traits;

trait HasPermission {
    public function validateuser($permission) {
        $user = auth()->user();
        if(!$user->can($this->page.'-'.$permission)){
            return abort(403);
        }
    }
}