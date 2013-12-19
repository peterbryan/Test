$(".//div[@id='Container']"){


	add_class("_category")

		$(".//div[contains(@class,'NewsletterSubscription')]"){
			remove()
		}

$("//div[@id='LayoutColumn1']"){
	remove()
}

	$("//div[@class='Block Moveable Panel Breadcrumb']"){
			remove()
	}
	$(".//div[@id='CategoryHeading']//div[@class='FloatRight SortBox']"){
			add_class("mw_bar1")
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
		


// Fixing Formatting of the prices and descriptions

$("//div[@class='ProductMain']//div[@class='Label']//em[@class='ProductPrice VariationProductPrice']")
	{
		$price=fetch('em')
	}

	$("//div[contains(@class,'Price')]"){
			
			text(){
						append($price)
						}
	}



// Fixing Formatting of the prices and descriptions

$("//div[@class='DetailRow ProductSKU']//div[@class='Value']//span[@class='VariationProductSKU']")
	{
		$sku=fetch('testing')
	}

	$("//div[contains(@class,'SKU:')]"){
			
			text(){
						append($price)
						}
	}
}








