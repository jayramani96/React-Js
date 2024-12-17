import React from 'react'

export default function Navv() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top py-2" style="z-index: 10;">
    <div class="container-fluid d-flex justify-content-between align-items-center">
        
        <div class="d-flex align-items-center">
            <div class="d-flex justify-content-center align-items-center" style="width: 60px; height: 80px;">
                <div
                    class="cursor-pointer"
                    style="width: 53px; height: 36px; background: url('/Logo/MyntraWebSprite_27_01_2021.png') no-repeat -462px 0; background-size: 1404px 105px;">
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-around align-items-center" style="width: 515px;">
            
            <div class="text-uppercase text-dark fw-bold d-flex align-items-center">
                <a href="#" class="text-decoration-none" style="font-size: 14px;">Home</a>
            </div>
            <div class="text-uppercase text-dark fw-bold d-flex align-items-center">
                <a href="#" class="text-decoration-none" style="font-size: 14px;">Shop</a>
            </div>
            <div class="text-uppercase text-dark fw-bold d-flex align-items-center">
                <a href="#" class="text-decoration-none" style="font-size: 14px;">Contact</a>
            </div>
        </div>

        
        <div class="d-flex align-items-center" style="width: 450px;">
            <div class="input-group bg-light rounded" style="width: 100%;">
                <span class="input-group-text bg-transparent border-0 rounded-0">
                    <div
                        class="cursor-pointer"
                        style="width: 21px; height: 21px; background: url('/Logo/MyntraWebSprite_27_01_2021.png') no-repeat -754px 0; background-size: 1404px 105px;">
                    </div>
                </span>
                <input type="text" class="form-control border-0 bg-transparent" placeholder="Search for products, brands and more" />
            </div>
        </div>

        <div class="d-flex justify-between align-items-center" style="width: 195px;">
            <div class="text-center cursor-pointer">
                <div
                    class="mx-auto"
                    style="width: 24px; height: 24px; background: url('/Logo/MyntraWebSprite_27_01_2021.png') no-repeat -298px -56px; background-size: 1404px 105px;">
                </div>
                <div class="text-dark fw-bold" style="font-size: 12px;">Profile</div>
            </div>
            <div class="text-center cursor-pointer">
                <div
                    class="mx-auto"
                    style="width: 17px; height: 24px; background: url('/Logo/MyntraWebSprite_27_01_2021.png') no-repeat -315px -187px; background-size: 1404px 105px;">
                </div>
                <div class="text-dark fw-bold" style="font-size: 12px;">Wishlist</div>
            </div>
            <div class="text-center cursor-pointer">
                <div
                    class="mx-auto"
                    style="width: 24px; height: 24px; background: url('/Logo/MyntraWebSprite_27_01_2021.png') no-repeat -341px -56px; background-size: 1404px 105px;">
                </div>
                <div class="text-dark fw-bold" style="font-size: 12px;">Bag</div>
            </div>
        </div>
    </div>
</nav>

    </div>
  )
}
