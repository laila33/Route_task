import 'package:flutter/material.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:route_task/core/themes/my_colors.dart';

class HomeAppBar extends StatefulWidget {
  const HomeAppBar({
    super.key,
  });

  @override
  State<HomeAppBar> createState() => _HomeAppBarState();
}

class _HomeAppBarState extends State<HomeAppBar> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 15.w, top: 5.h),
      child: Column(
        children: [
          Container(
            margin: EdgeInsets.only(bottom: 20.h),
            child: Row(
              children: [
                Image.asset(
                  "assets/images/app_bar_logo.png",
                  alignment: Alignment.topLeft,
                ),
              ],
            ),
          ),
          Row(
            children: [
              Expanded(
                child: TextField(
                  style: Theme.of(context)
                      .textTheme
                      .titleSmall
                      ?.copyWith(fontSize: 18.sp),
                  decoration: InputDecoration(
                    hintText: "what do uou search for?",
                    hintStyle: Theme.of(context).textTheme.titleSmall?.copyWith(
                        fontSize: 14.sp,
                        color: Colors.grey,
                        fontFamily: 'Poppins'),
                    prefixIconConstraints: BoxConstraints(
                      minWidth: 70.w,
                      maxWidth: 100.w,
                    ),
                    prefixIcon: ImageIcon(
                      const AssetImage(
                        "assets/images/search_icon.png",
                      ),
                      color: MyColors.blueColor,
                      size: 40.sp,
                    ),
                    contentPadding: const EdgeInsets.only(top: 0),
                    border: OutlineInputBorder(
                      borderSide: const BorderSide(color: MyColors.blueColor),
                      borderRadius: BorderRadius.all(
                        Radius.circular(30.r),
                      ),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderSide: const BorderSide(color: MyColors.blueColor),
                      borderRadius: BorderRadius.all(
                        Radius.circular(30.r),
                      ),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderSide: const BorderSide(color: MyColors.blueColor),
                      borderRadius: BorderRadius.all(
                        Radius.circular(30.r),
                      ),
                    ),
                  ),
                ),
              ),
              SizedBox(
                width: 5.w,
              ),
              IconButton(
                onPressed: () {},
                icon: const ImageIcon(
                  AssetImage(
                    "assets/images/cart_icon.png",
                  ),
                  color: MyColors.blueColor,
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
