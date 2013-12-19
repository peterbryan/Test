
$(".//div[@class='Left']//div[@id='SideShopByBrand']"){
attribute('data-ur-set','toggler')
	$("./h2"){
				add_class("mw_bar1")
				attribute('data-ur-toggler-component','button')
				insert("div", class: "mw_indicator")
			}
		$("./div"){
				attribute('data-ur-toggler-component','content')}

				$('.//li/a'){
					insert("div", class:"mw_arrow")
				}
}

$("//div[@id='SideNewsletterBox']"){
	remove()
}

//Removing the Feed Button
	$("//span[@class='FeedLink FloatRight']"){
		remove()
	}
	$(".//div[@class='Block Moveable Panel SideCart']"){
		remove()
	}

$("//div[@class='ProductDetails']//div[@class='ProductActionAdd']"){
			add_class("mw_addtocart")
		}

			$("//ul[@class='ProductList ']//div[@class='ProductActionAdd']"){
			add_class("mw_addtocart")
		}
		$("//ul[@class='ProductList']//div[@class='ProductActionAdd']"){
			add_class("mw_addtocart")
		}