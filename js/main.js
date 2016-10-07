$(document).ready(function () {
    $('.navbar-toggle') .on('click',function(){
        $('.collapse').toggleClass('show');
    });
    $('.chose_presents .sell-list, .added-products ').niceScroll({
        cursorcolor: '#8c8c8c',
        cursorwidth: '8px',
        cursoropacitymin: '0.7',
        background: '#d7d7d7'
    });

$('.align-justify').click(function () {
$('header nav ul').toggleClass('active')
});
    $(".add-to-list-btn").click(function (e) {
        e.preventDefault();
        var tip_id = $(this).closest('.chose_presents').find('.type-off-product').attr('data-id');
        var data = $(this).closest('.sell-list__inner').attr('data-id');


        if ($('.type-off-product[data-id="' + data + '"]').length > 0) {
            //if (data == tip_id) {

            $(this).closest('.chose_presents').find(' [data-id="' + data + '"]  .added-products__item-brought').remove();
            $(this).closest('.sell-list__inner').find(".added-goods").addClass('active');
            $(this).closest('.sell-list__item').addClass('added');
        }
        else {
            $(".add-to-list-btn").removeClass('active');

            $(this).closest('.sell-list__inner').find(".added-goods").addClass('active');

            $(this).closest('.chose_presents').find(".present-form-add__empty").addClass('no-active');

            $(this).closest('.sell-list__item').addClass('added');


            //thi add block with content to added-products
            $('.added-products').append('<div class="type-off-product" />');


            var this_parent = $(this).closest('.sell-list__inner');
            var this_full_text = this_parent.find('.full-text').clone().addClass('full-text-added').removeClass('full-text');
            var this_full_img = this_parent.find('.add-too-list img').clone().addClass('added-product__img');
            var this_full_price = this_parent.find('.price').clone().addClass('added-product__price').prepend("Best Price: ");
            var this_full_amazone = $(this).closest('.sell-list__add-to-list').find('p').clone();
            var this_products_menu = $(this).closest('.chose_presents').find('.added-products__dop .added-products__item-menu').clone();
            var this_products_clip = $(this).closest('.chose_presents').find('.added-products__dop .clip').clone().removeClass('no-active').addClass('activ');
            var this_dismis_block = $(this).closest('.main-content').find('.added-products__item-brought').clone();

            var new_el = $('<div class="type-off-product" data-id=' + data + '/> ').prependTo('.added-products');

            new_el.append(this_full_img);
            new_el.append(this_full_text);
            new_el.append(this_full_price);
            new_el.append(this_full_amazone);
            new_el.append(this_products_menu);
            new_el.append(this_dismis_block);
            new_el.append(this_products_clip);

        }

    });
    $(document).on('click', '.navigation-menu', function (e) {

        e.preventDefault();
        $(this).parent().find("ul").toggleClass('active');

    });

    $(document).on('click', '.remove', function (e) {
        e.preventDefault();
        var too_type = $(this).closest('.type-off-product'),
            brought = $(this).closest('.main-content').find('.added-products__dop .added-products__item-brought').clone().addClass('active');
        too_type.append(brought);

        var data_brought = $(this).closest('.type-off-product').attr('data-id');
        $('.sell-list__inner[data-id="' + data_brought + '"] .added-goods').removeClass('active');
        $('.sell-list__inner[data-id="' + data_brought + '"]').closest('.sell-list__item').removeClass('added');
    });


    $(document).on('click', '.refresh', function (e) {
        e.preventDefault();
        var data_brought = $(this).closest('.type-off-product').attr('data-id');
        $(this).closest('.type-off-product').find('.added-products__item-brought').remove();
        $('.sell-list__inner[data-id="' + data_brought + '"] .added-goods').addClass('active');
        $('.sell-list__inner[data-id="' + data_brought + '"]').closest('.sell-list__item').addClass('added');
    });

    var size = 105,
        newsContent = $('.sum-describe__text'),
        newsText = newsContent.text();

    if (newsText.length > size) {
        newsContent.html(newsText.slice(0, size) + '<span class="none_end"> ...</span>' + '<span class="sum-describe__text__add">' + newsText.slice(size) + '</span>');
    }

    $(".read-more").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('read-more_poth');
        $('.sum-describe__text__add').toggleClass('active');
        $('.none_end').toggleClass('no-active');
    });
    $(".added-goods").hover(
        function () {
            $('.sell-list__product').toggleClass('nohover');
        }
    );

    var sizetwo = 40,
        newsContenttwo = $('.sell-list__product .full-text');

    newsContenttwo.each(function () {
        var this_text = $(this).text();
        if (this_text.length > sizetwo) {
            $(this).html(this_text.slice(0, sizetwo) + '<span class="none_end_two "> ...</span>' + '<span class="full-text-two no-active">' + this_text.slice(sizetwo) + '</span>');
        }
    });
    $(".sell-list__item").hover(
        function () {
            $('.none_end_two').toggleClass('no-active');
            $('.full-text-two').toggleClass('no-active');

        }
    );
});
