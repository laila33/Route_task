import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:route_task/core/api/api_manager.dart';
import 'package:route_task/products_feature/domain/entities/error.dart';
import 'package:route_task/products_feature/domain/entities/products_response.dart';
import 'package:route_task/products_feature/domain/repository/data_sources/products_remote_data_source_contract.dart';

@LazySingleton(as: ProductsRemoteDataSourceContract)
class ProductsRemoteDataSourceImpl implements ProductsRemoteDataSourceContract {
  final ApiManager _apiManager;

  ProductsRemoteDataSourceImpl(this._apiManager);

  @override
  Future<Either<Errors, ProductsResponse>> getProducts() async {
    var either = await _apiManager.getProducts();
    return either.fold(
      (error) {
        return Left(error);
      },
      (response) {
        return Right(response);
      },
    );
  }
}
