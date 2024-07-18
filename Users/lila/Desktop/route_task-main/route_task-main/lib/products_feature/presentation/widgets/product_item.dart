import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:route_task/core/themes/my_colors.dart';
import 'package:route_task/products_feature/domain/entities/products_response.dart';

class ProductItem extends StatelessWidget {
  final Product product;

  const ProductItem({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Material(
      borderRadius: BorderRadius.circular(15.r),
      elevation: 1.5.r,
      child: Container(
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(15.r),
          border: Border.all(
            width: 2.w,
            color: MyColors.blueColor.withOpacity(0.3),
          ),
        ),
        child: Column(
          children: [
            Expanded(
              child: Stack(
                children: [
                  SizedBox(
                    height: 200.h,
                    child: ClipRRect(
                      borderRadius: BorderRadius.only(
                        topLeft: Radius.circular(15.r),
                        topRight: Radius.circular(15.r),
                      ),
                      child: CachedNetworkImage(
                        imageUrl: product.images?.last ?? "",
                        placeholder: (_, __) => const Center(
                          child: CircularProgressIndicator(
                            color: MyColors.blueColor,
                          ),
                        ),
                        fit: BoxFit.cover,
                        width: double.infinity,
                      ),
                    ),
                  ),
                  Align(
                    alignment: Alignment.topRight,
                    child: IconButton(
                      onPressed: () {
                        ///ToDo: Add To Favorites
                      },
                      icon: Material(
                        elevation: 4,
                        shape: const CircleBorder(),
                        child: CircleAvatar(
                          backgroundColor: MyColors.whiteColor,
                          radius: 18.r,
                          child: ImageIcon(
                            const AssetImage(
                              "assets/images/favorit_icon.png",
                            ),
                            size: 25.r,
                            color: MyColors.blueColor,
                          ),
                        ),
                      ),
                    ),
                  )
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    product.title ?? "",
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    textAlign: TextAlign.start,
                    style: Theme.of(context).textTheme.titleMedium?.copyWith(
                          color: MyColors.blueColor,
                          fontSize: 17.sp,
                        ),
                  ),
                  Row(
                    children: [
                      Text(
                        " EGP ${product.price ?? 0}",
                        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                              color: MyColors.blueColor,
                              fontSize: 16.sp,
                            ),
                      ),
                    ],
                  ),
                  Row(
                    children: [
                      Text(
                        "Review ${product.rating}",
                        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                              color: MyColors.blueColor,
                              fontSize: 16.sp,
                            ),
                      ),
                      SizedBox(
                        width: 5.w,
                      ),
                      const Image(
                        image: AssetImage(
                          "assets/images/stat_icon.png",
                        ),
                      ),
                      const Spacer(),
                      IconButton(
                        onPressed: () {
                          ///ToDo: Add To Cart
                        },
                        icon: SizedBox(
                          width: 35.w,
                          height: 35.h,
                          child: const ImageIcon(
                            AssetImage(
                              "assets/images/add_icon.png",
                            ),
                            color: MyColors.blueColor,
                          ),
                        ),
                      )
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
