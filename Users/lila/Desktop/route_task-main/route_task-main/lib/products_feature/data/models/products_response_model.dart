import 'package:route_task/products_feature/domain/entities/products_response.dart';

class ProductsResponseModel extends ProductsResponse {
  ProductsResponseModel({super.products, super.total, super.skip, super.limit});

  ProductsResponseModel.fromJson(Map<String, dynamic> json) {
    if (json["products"] is List) {
      products = json["products"] == null
          ? null
          : (json["products"] as List)
              .map((e) => ProductModel.fromJson(e))
              .toList();
    }
    if (json["total"] is int) {
      total = json["total"];
    }
    if (json["skip"] is int) {
      skip = json["skip"];
    }
    if (json["limit"] is int) {
      limit = json["limit"];
    }
  }
}

class ProductModel extends Product {
  String? description;
  int? stock;
  List<String>? tags;
  String? brand;
  String? sku;
  int? weight;
  DimensionsModel? dimensions;
  String? warrantyInformation;
  String? shippingInformation;
  String? availabilityStatus;
  String? returnPolicy;
  int? minimumOrderQuantity;
  MetaModel? meta;

  ProductModel(
      {super.id,
      super.title,
      this.description,
      super.category,
      super.price,
      super.discountPercentage,
      super.rating,
      this.stock,
      this.tags,
      this.brand,
      this.sku,
      this.weight,
      this.dimensions,
      this.warrantyInformation,
      this.shippingInformation,
      this.availabilityStatus,
      super.reviews,
      this.returnPolicy,
      this.minimumOrderQuantity,
      this.meta,
      super.images,
      super.thumbnail});

  ProductModel.fromJson(Map<String, dynamic> json) {
    if (json["id"] is int) {
      id = json["id"];
    }
    if (json["title"] is String) {
      title = json["title"];
    }
    if (json["description"] is String) {
      description = json["description"];
    }
    if (json["category"] is String) {
      category = json["category"];
    }
    if (json["price"] is double) {
      price = json["price"];
    }
    if (json["discountPercentage"] is double) {
      discountPercentage = json["discountPercentage"];
    }
    if (json["rating"] is double) {
      rating = json["rating"];
    }
    if (json["stock"] is int) {
      stock = json["stock"];
    }
    if (json["tags"] is List) {
      tags = json["tags"] == null ? null : List<String>.from(json["tags"]);
    }
    if (json["brand"] is String) {
      brand = json["brand"];
    }
    if (json["sku"] is String) {
      sku = json["sku"];
    }
    if (json["weight"] is int) {
      weight = json["weight"];
    }
    if (json["dimensions"] is Map) {
      dimensions = json["dimensions"] == null
          ? null
          : DimensionsModel.fromJson(json["dimensions"]);
    }
    if (json["warrantyInformation"] is String) {
      warrantyInformation = json["warrantyInformation"];
    }
    if (json["shippingInformation"] is String) {
      shippingInformation = json["shippingInformation"];
    }
    if (json["availabilityStatus"] is String) {
      availabilityStatus = json["availabilityStatus"];
    }
    if (json["reviews"] is List) {
      reviews = json["reviews"] == null
          ? null
          : (json["reviews"] as List)
              .map((e) => ReviewsModel.fromJson(e))
              .toList();
    }
    if (json["returnPolicy"] is String) {
      returnPolicy = json["returnPolicy"];
    }
    if (json["minimumOrderQuantity"] is int) {
      minimumOrderQuantity = json["minimumOrderQuantity"];
    }
    if (json["meta"] is Map) {
      meta = json["meta"] == null ? null : MetaModel.fromJson(json["meta"]);
    }
    if (json["images"] is List) {
      images =
          json["images"] == null ? null : List<String>.from(json["images"]);
    }
    if (json["thumbnail"] is String) {
      thumbnail = json["thumbnail"];
    }
  }
}

class MetaModel {
  String? createdAt;
  String? updatedAt;
  String? barcode;
  String? qrCode;

  MetaModel({this.createdAt, this.updatedAt, this.barcode, this.qrCode});

  MetaModel.fromJson(Map<String, dynamic> json) {
    if (json["createdAt"] is String) {
      createdAt = json["createdAt"];
    }
    if (json["updatedAt"] is String) {
      updatedAt = json["updatedAt"];
    }
    if (json["barcode"] is String) {
      barcode = json["barcode"];
    }
    if (json["qrCode"] is String) {
      qrCode = json["qrCode"];
    }
  }
}

class ReviewsModel extends Reviews {
  String? comment;
  String? date;
  String? reviewerName;
  String? reviewerEmail;

  ReviewsModel(
      {super.rating,
      this.comment,
      this.date,
      this.reviewerName,
      this.reviewerEmail});

  ReviewsModel.fromJson(Map<String, dynamic> json) {
    if (json["rating"] is int) {
      rating = json["rating"];
    }
    if (json["comment"] is String) {
      comment = json["comment"];
    }
    if (json["date"] is String) {
      date = json["date"];
    }
    if (json["reviewerName"] is String) {
      reviewerName = json["reviewerName"];
    }
    if (json["reviewerEmail"] is String) {
      reviewerEmail = json["reviewerEmail"];
    }
  }
}

class DimensionsModel {
  double? width;
  double? height;
  double? depth;

  DimensionsModel({this.width, this.height, this.depth});

  DimensionsModel.fromJson(Map<String, dynamic> json) {
    if (json["width"] is double) {
      width = json["width"];
    }
    if (json["height"] is double) {
      height = json["height"];
    }
    if (json["depth"] is double) {
      depth = json["depth"];
    }
  }
}
