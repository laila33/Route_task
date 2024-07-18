import 'package:dartz/dartz.dart';
import 'package:route_task/products_feature/domain/entities/error.dart';
import 'package:route_task/products_feature/domain/entities/products_response.dart';

abstract class ProductsRemoteDataSourceContract {
  Future<Either<Errors, ProductsResponse>> getProducts();
}
