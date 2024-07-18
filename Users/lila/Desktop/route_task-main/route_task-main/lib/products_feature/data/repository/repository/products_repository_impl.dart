import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:route_task/products_feature/domain/entities/error.dart';
import 'package:route_task/products_feature/domain/entities/products_response.dart';
import 'package:route_task/products_feature/domain/repository/data_sources/products_remote_data_source_contract.dart';
import 'package:route_task/products_feature/domain/repository/repository/products_repository_contract.dart';

@LazySingleton(as: ProductsRepositoryContract)
class ProductsRepositoryImpl implements ProductsRepositoryContract {
  final ProductsRemoteDataSourceContract _remoteDataSource;

  ProductsRepositoryImpl(this._remoteDataSource);

  @override
  Future<Either<Errors, ProductsResponse>> getProducts() {
    return _remoteDataSource.getProducts();
  }
}
