import 'package:route_task/products_feature/domain/entities/products_response.dart';

abstract class ProductsStates {}

class ProductsInitialState extends ProductsStates {}

class ProductsLoadingState extends ProductsStates {}

class ProductsSuccessState extends ProductsStates {
  List<Product>? products;

  ProductsSuccessState({required this.products});
}

class ProductErrorState extends ProductsStates {
  String? errorMessage;

  ProductErrorState(this.errorMessage);
}
