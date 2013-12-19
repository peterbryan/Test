$(".//div[@id='Container']"){


	add_class("_category")

		$(".//div[contains(@class,'NewsletterSubscription')]"){
			remove()
		}


	$(".//div[@id='Wrapper']/div[@class='Left']"){
		$("./div[@id='SideShopByBrand'] | ./div[@id='SideCategoryShopByPrice']"){
			attribute('data-ur-set','toggler')
			$("./h2"){
				add_class("mw_bar1")
				attribute('data-ur-toggler-component','button')
				insert("div", class: "mw_indicator")
			}
			$("./div"){
				attribute('data-ur-toggler-component','content')	
			}
			$(".//li/a"){
				insert("div", class:"mw_arrow")
				
			}

			}
		}//close left

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
		
$(".//div[@class='CompareButton']"){
	remove()
}


	}//Close All


	//Going to fetch values and rewrite price and all of those
	//neat things in product description.

	





