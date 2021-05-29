const Product = require('../models/product')
const slugify = require('slugify')

exports.getAllProducts = (req, res) => {
	Product.find({}).exec(async (err, products) => {
		if (err)
			return res
				.status(400)
				.json({ message: 'something went wrong ', error: err })
		if (products)
			return res.status(200).json({
				message: 'all products fetched registered',
				products: products,
			})
	})
}

exports.createProduct = (req, res) => {
	const {
		productType,
		productName,
		quantityKG,
		showPrice,
		offerPrice,
		affordableRangeKM,
	} = req.body

	const _product = new Product({
		productType,
		productName,
		slug: slugify(productName),
		quantityKG,
		showPrice,
		offerPrice,
		affordableRangeKM,
		userId: req.user._id,
	})

	_product.save((error, product) => {
		if (error) return res.status(400).json({ error })
		if (product)
			return res.status(201).json({
				message: 'product created successfully',
				category: product,
			})
	})
}

exports.signOut = (req, res) => {
	res.clearCookie('token')
	res.status(200).json({ message: 'Signout successfully...' })
}

exports.getProduct = (req, res) => {
	Product.findById(req.params.id).exec((err, product) => {
		if (err)
			return res
				.status(400)
				.json({ message: 'something went wrong ', error: err })
		if (!product)
			return res.status(400).json({
				message: 'Product not found',
			})

		const {
			productType,
			productName,
			quantityKG,
			showPrice,
			offerPrice,
			affordableRangeKM,
			ratings,
			userId,
		} = product

		const sendProduct = {
			productType,
			productName,
			quantityKG,
			showPrice,
			offerPrice,
			affordableRangeKM,
			ratings,
			userId,
		}

		return res.status(200).json({
			message: 'Product fetched successfully',
			product: sendProduct,
		})
	})
}

exports.updateProduct = (req, res) => {
	Product.findById(req.params.id).exec((err, _product) => {
		if (err)
			return res
				.status(400)
				.json({ message: 'something went wrong ', error: err })
		if (!_product)
			return res.status(400).json({
				message: 'Product not found',
			})

		if (req.body.productType != null)
			_product.productType = req.body.productType

		if (req.body.productName != null)
			_product.productName = req.body.productName

		if (req.body.quantityKG != null) _product.quantityKG = req.body.quantityKG

		if (req.body.showPrice != null) _product.showPrice = req.body.showPrice

		if (req.body.offerPrice != null) _product.offerPrice = req.body.offerPrice

		if (req.body.affordableRangeKM != null)
			_product.affordableRangeKM = req.body.affordableRangeKM

		_product.save((error, product) => {
			if (error) {
				return res.status(400).json({
					message: 'Something went wrong',
					error: error,
				})
			}

			if (product) {
				return res.status(201).json({
					message: 'Product successfully updated',
				})
			}
		})
	})
}

exports.deleteProduct = (req, res) => {
	Product.findByIdAndDelete(req.params.id, function (err) {
		if (err)
			return res
				.status(400)
				.json({ message: 'something went wrong', error: err })
		return res.status(201).json({ message: 'Product deleted' })
	})
}

exports.reviewUpdate = (req, res) => {
	Product.findById(req.params.id).exec((err, _product) => {
		if (err)
			return res
				.status(400)
				.json({ message: 'something went wrong ', error: err })
		if (!_product)
			return res.status(400).json({
				message: 'Product not found',
			})
		if (req.body.addReview) {
			let totRating = _product.ratings * _product.reviews.length
			totRating =
				(totRating + req.body.addReview.rating) / (_product.reviews.length + 1)
			_product.reviews.push({
				...req.body.addReview,
				user: req.user._id,
			})
			_product.ratings = totRating
		}

		if (req.body.delReview) {
			let totRating = _product.ratings * _product.reviews.length
			totRating =
				(totRating - req.body.delReview.rating) / (_product.reviews.length - 1)
			_product.reviews.splice(
				_product.reviews.findIndex(
					(review) => review._id == req.body.delReview._id
				),
				1
			)
			_product.ratings = totRating
		}
		_product.save((error, product) => {
			if (error) {
				return res.status(400).json({
					message: 'Something went wrong',
					error: error,
				})
			}

			if (product) {
				return res.status(201).json({
					message: 'Review successfully updated',
				})
			}
		})
	})
}

exports.addBid = (req, res) => {
	Product.findById(req.params.id).exec((err, _product) => {
		if (err)
			return res
				.status(400)
				.json({ message: 'something went wrong ', error: err })
		if (!_product)
			return res.status(400).json({
				message: 'Product not found',
			})

		const { price, quantity } = req.body.addBid

		_product.bids = [..._product.bids, { price, quantity, user: req.user._id }]

		_product.save((error, product) => {
			if (error) {
				return res.status(400).json({
					message: 'Something went wrong',
					error: error,
				})
			}

			if (product) {
				return res.status(201).json({
					message: 'Bid successfully added',
				})
			}
		})
	})
}

exports.updateBid = (req, res) => {
	Product.findById(req.params.id).exec((err, _product) => {
		if (err)
			return res
				.status(400)
				.json({ message: 'something went wrong ', error: err })
		if (!_product)
			return res.status(400).json({
				message: 'Product not found',
			})

		const { price, quantity, status } = req.body.updateBid
		const index = _product.bids.findIndex((item) => {
			return item.user === req.user._id
		})
		if (status) {
			_product.bids[index] = { price, quantity, status }
		} else {
			_product.bids[index] = { price, quantity }
		}

		_product.save((error, product) => {
			if (error) {
				return res.status(400).json({
					message: 'Something went wrong',
					error: error,
				})
			}

			if (product) {
				return res.status(201).json({
					message: 'Bid successfully updated',
				})
			}
		})
	})
}

exports.deleteBid = (req, res) => {
	Product.findById(req.params.id).exec((err, _product) => {
		if (err)
			return res
				.status(400)
				.json({ message: 'something went wrong ', error: err })
		if (!_product)
			return res.status(400).json({
				message: 'Product not found',
			})

		const index = _product.bids.findIndex((item) => {
			return item.user === req.user._id
		})

		_product.bids.splice(index, 1)

		_product.save((error, product) => {
			if (error) {
				return res.status(400).json({
					message: 'Something went wrong',
					error: error,
				})
			}

			if (product) {
				return res.status(201).json({
					message: 'Bid successfully deleted',
				})
			}
		})
	})
}
