<html>
  <head>
    <meta charset="utf-8" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body style="background-color: rgb(240, 236, 236)">
    <nav>
      <div class="nav-belt">
        <div class="row">
          <div class="col-3 nav-left">
            <a class="anchor" href="#">
              <img src="./assets/logoamazon1.jpg" width="90px" height="50px" />
            </a>
            <a class="anchor" href="#">Select your address</a>
          </div>
          <div class="nav-fill col-5">
            <div class="input-group">
              <span class="input-group-text">All</span>
              <input type="text" class="w-75" name="search" />
              <button class="btn btn-warning" type="search">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>

          <div class="col-4">
            <ul class="nav-right">
              <li>
                <a class="anchor" href="#">Accounts &amp;lists</a>
              </li>
              <li>
                <a class="anchor" href="#">Returns &amp; orders</a>
              </li>
              <li>
                <!-- <a class="anchor" href="#"><img src="/assets/cart.jpg" width=30px height=30px>Carts</a> -->
                <button
                  class="cart btn btn-primary"
                  onclick="window.location.href='cart.html'"
                >
                  <i class="fa fa-shopping-cart" style="font-size: 36px"></i
                  >(<span>0</span>)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav-main">
        <div class="row">
          <section class="col-9">
            <ul class="nav-mainleft">
              <li><a class="anchor" href="#">All</a></li>
              <li><a class="anchor" href="#">Best Sellers</a></li>
              <li><a class="anchor" href="#">Mobiles</a></li>
              <li><a class="anchor" href="#">Customer Services</a></li>
              <li><a class="anchor" href="#">Electronics</a></li>
              <li><a class="anchor" href="#">Fashion</a></li>
              <li><a class="anchor" href="#">Today's Deals</a></li>
              <li><a class="anchor" href="#">Home & Kitchen</a></li>
              <li><a class="anchor" href="#">Amazon Pay</a></li>
              <li><a class="anchor" href="#">Computers</a></li>
              <li><a class="anchor" href="#">New Releases</a></li>
            </ul>
          </section>
          <section class="col-3">
            <a class="nav-logo" href="#">
              <img
                src="D:\javascript_programs\Cart Demo\cart\assets\amazon_arrow_logo.jpg"
                width="25px"
                height="25px"
                style="border-radius: 5px"
              />
              Shop made easy| Download app</a
            >
          </section>
        </div>
      </div>
    </nav>
    <div
      class="products-container table_margin"
      style="background-color: floralwhite"
    >
      <div class="row">
        <div class="col"><h3>Shopping Cart</h3></div>
        <div class="col-6"></div>
        <div class="col"><h5>Price</h5></div>
      </div>
      <hr />
      <div>
        <div class="products">
          <h5>Your cart is empty</h5>
        </div>
      </div>
      <hr />
      <div class="row">
        <div class="col"><h3></h3></div>
        <div class="col-4"></div>
        <div class="total-price col"></div>
      </div>
    </div>
    <script src="cartscript.js"></script>
  </body>
</html>
