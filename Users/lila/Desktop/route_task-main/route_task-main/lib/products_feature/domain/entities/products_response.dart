class ProductsResponse {
  List<Product>? products;
  int? total;
  int? skip;
  int? limit;

  ProductsResponse({this.products, this.total, this.skip, this.limit});
}

class Product {
  int? id;
  String? title;
  String? category;
  double? price;
  double? discountPercentage;
  double? rating;
  List<Reviews>? reviews;
  List<String>? images;
  String? thumbnail;

  Product(
      {this.id,
      this.title,
      this.category,
      this.price,
      this.discountPercentage,
      this.rating,
      this.reviews,
      this.images,
      this.thumbnail});
}

class Reviews {
  int? rating;

  Reviews({this.rating});
}
