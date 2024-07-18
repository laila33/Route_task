import 'dart:convert';
import 'package:dartz/dartz.dart';
import 'package:injectable/injectable.dart';
import 'package:route_task/core/api/api_constants.dart';
import 'package:route_task/products_feature/data/models/products_response_model.dart';
import 'package:route_task/products_feature/domain/entities/error.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:http/http.dart' as https;

@singleton
class ApiManager {
  Future<Either<Errors, ProductsResponseModel>> getProducts() async {
    final List<ConnectivityResult> connectivityResult =
        await (Connectivity().checkConnectivity());

    if (connectivityResult.contains(ConnectivityResult.mobile) ||
        connectivityResult.contains(ConnectivityResult.wifi)) {
      Uri url = Uri.https(ApiConstants.baseUrl, ApiConstants.productsEndPoint);
      var response = await https.get(url);
      var productsResponse =
          ProductsResponseModel.fromJson(jsonDecode(response.body));

      if (response.statusCode >= 200 && response.statusCode < 300) {
        print(response.body);
        return Right(productsResponse);
      } else {
        return Left(ServerError(errorMessage: "Something went wrong"));
      }
    } else {
      return Left(
          NetworkError(errorMessage: "Please check the internet connection"));
    }
  }
}
