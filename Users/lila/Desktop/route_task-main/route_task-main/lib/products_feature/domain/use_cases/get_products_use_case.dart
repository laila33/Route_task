import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:route_task/products_feature/domain/entities/error.dart';
import 'package:route_task/products_feature/domain/entities/products_response.dart';
import 'package:route_task/products_feature/domain/repository/repository/products_repository_contract.dart';

@injectable
class GetProductsUseCase {
  final ProductsRepositoryContract _productsRepository;

  @factoryMethod
  GetProductsUseCase(this._productsRepository);

  Future<Either<Errors, ProductsResponse>> call() {
    return _productsRepository.getProducts();
  }
}
