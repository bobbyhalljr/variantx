"use strict";
// variantx.ts
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vx = void 0;
var vx = function (config, prefix) {
    if (prefix === void 0) { prefix = 'tmui'; }
    var _a = config.base, base = _a === void 0 ? '' : _a, _b = config.variants, variants = _b === void 0 ? {} : _b, _c = config.compoundVariants, compoundVariants = _c === void 0 ? [] : _c, _d = config.defaultVariants, defaultVariants = _d === void 0 ? {} : _d, _e = config.mediaQueries, mediaQueries = _e === void 0 ? {} : _e, _f = config.globalStyles, globalStyles = _f === void 0 ? '' : _f, _g = config.customUtilities, customUtilities = _g === void 0 ? {} : _g;
    return function (options) {
        var providedVariants = __rest(options, []);
        var result = "".concat(prefix, "-").concat(base); // Prefix the base class
        Object.entries(providedVariants).forEach(function (_a) {
            var variant = _a[0], value = _a[1];
            if (variants[variant] && variants[variant][value]) {
                result += " ".concat(prefix, "-").concat(variants[variant][value]);
            }
        });
        compoundVariants.forEach(function (compoundVariant) {
            var shouldApply = Object.entries(compoundVariant).every(function (_a) {
                var variant = _a[0], value = _a[1];
                return providedVariants[variant] === value;
            });
            if (shouldApply) {
                result += " ".concat(prefix, "-").concat(compoundVariant.class);
            }
        });
        Object.entries(defaultVariants).forEach(function (_a) {
            var variant = _a[0], value = _a[1];
            if (!providedVariants[variant]) {
                result += " ".concat(prefix, "-").concat(variants[variant][value]);
            }
        });
        Object.entries(mediaQueries).forEach(function (_a) {
            var query = _a[0], styles = _a[1];
            result += " ".concat(prefix, "-").concat(query, "{").concat(styles, "}");
        });
        result += " ".concat(prefix, "-").concat(globalStyles);
        Object.entries(customUtilities).forEach(function (_a) {
            var utility = _a[0], styles = _a[1];
            result += " ".concat(prefix, "-").concat(utility, "{").concat(styles, "}");
        });
        return result.trim();
    };
};
exports.vx = vx;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2YXJpYW50eC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUF5QmQsSUFBTSxFQUFFLEdBQUcsVUFBQyxNQUFxQixFQUFFLE1BQXVCO0lBQXZCLHVCQUFBLEVBQUEsZUFBdUI7SUFFdEQsSUFBQSxLQU9FLE1BQU0sS0FQQyxFQUFULElBQUksbUJBQUcsRUFBRSxLQUFBLEVBQ1QsS0FNRSxNQUFNLFNBTkssRUFBYixRQUFRLG1CQUFHLEVBQUUsS0FBQSxFQUNiLEtBS0UsTUFBTSxpQkFMYSxFQUFyQixnQkFBZ0IsbUJBQUcsRUFBRSxLQUFBLEVBQ3JCLEtBSUUsTUFBTSxnQkFKWSxFQUFwQixlQUFlLG1CQUFHLEVBQUUsS0FBQSxFQUNwQixLQUdFLE1BQU0sYUFIUyxFQUFqQixZQUFZLG1CQUFHLEVBQUUsS0FBQSxFQUNqQixLQUVFLE1BQU0sYUFGUyxFQUFqQixZQUFZLG1CQUFHLEVBQUUsS0FBQSxFQUNqQixLQUNFLE1BQU0sZ0JBRFksRUFBcEIsZUFBZSxtQkFBRyxFQUFFLEtBQUEsQ0FDWDtJQUVYLE9BQU8sVUFBQyxPQUErQjtRQUNyQyxJQUFXLGdCQUFnQixVQUFLLE9BQU8sRUFBakMsRUFBdUIsQ0FBVSxDQUFDO1FBRXhDLElBQUksTUFBTSxHQUFHLFVBQUcsTUFBTSxjQUFJLElBQUksQ0FBRSxDQUFDLENBQUMsd0JBQXdCO1FBRTFELE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFnQjtnQkFBZixPQUFPLFFBQUEsRUFBRSxLQUFLLFFBQUE7WUFDdkQsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqRCxNQUFNLElBQUksV0FBSSxNQUFNLGNBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7YUFDcEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFDLGVBQWU7WUFDdkMsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQ3ZELFVBQUMsRUFBZ0I7b0JBQWYsT0FBTyxRQUFBLEVBQUUsS0FBSyxRQUFBO2dCQUFNLE9BQUEsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssS0FBSztZQUFuQyxDQUFtQyxDQUMxRCxDQUFDO1lBRUYsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsTUFBTSxJQUFJLFdBQUksTUFBTSxjQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUUsQ0FBQzthQUNqRDtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxFQUFnQjtnQkFBZixPQUFPLFFBQUEsRUFBRSxLQUFLLFFBQUE7WUFDdEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM5QixNQUFNLElBQUksV0FBSSxNQUFNLGNBQUksUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUM7YUFDcEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsRUFBZTtnQkFBZCxLQUFLLFFBQUEsRUFBRSxNQUFNLFFBQUE7WUFDbEQsTUFBTSxJQUFJLFdBQUksTUFBTSxjQUFJLEtBQUssY0FBSSxNQUFNLE1BQUcsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxXQUFJLE1BQU0sY0FBSSxZQUFZLENBQUUsQ0FBQztRQUV2QyxNQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQWlCO2dCQUFoQixPQUFPLFFBQUEsRUFBRSxNQUFNLFFBQUE7WUFDdkQsTUFBTSxJQUFJLFdBQUksTUFBTSxjQUFJLE9BQU8sY0FBSSxNQUFNLE1BQUcsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVPLGdCQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdmFyaWFudHgudHNcblxuLyoqXG4gKiBHZW5lcmF0ZXMgVGFpbHdpbmQgQ1NTIGNsYXNzIG5hbWVzIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBjb25maWd1cmF0aW9uLFxuICogYWxsb3dpbmcgZm9yIGZsZXhpYmxlIGFuZCByZXVzYWJsZSBzdHlsaW5nIHdpdGggc3VwcG9ydCBmb3IgdmFyaWFudHMsXG4gKiBjb21wb3VuZCB2YXJpYW50cywgZGVmYXVsdCB2YXJpYW50cywgbWVkaWEgcXVlcmllcywgZ2xvYmFsIHN0eWxlcyxcbiAqIGFuZCBjdXN0b20gdXRpbGl0aWVzLiBBZGRzIGEgcHJlZml4IHRvIGF2b2lkIGNvbmZsaWN0cyB3aXRoIGV4aXN0aW5nXG4gKiBUYWlsd2luZCBDU1MgY2xhc3Nlcy5cbiAqXG4gKiBAcGFyYW0gY29uZmlnIC0gVGhlIGNvbmZpZ3VyYXRpb24gZm9yIGdlbmVyYXRpbmcgY2xhc3Nlcy5cbiAqIEBwYXJhbSBwcmVmaXggLSBUaGUgcHJlZml4IHRvIGJlIGFkZGVkIHRvIGFsbCBnZW5lcmF0ZWQgY2xhc3Nlcy5cbiAqICAgICAgICAgICAgICAgICBEZWZhdWx0cyB0byAndG11aScgKGUuZy4sICd0bXVpLWJhc2UnLCAndG11aS12YXJpYW50JykuXG4gKiBAcmV0dXJucyBUaGUgZ2VuZXJhdGVkIFRhaWx3aW5kIENTUyBjbGFzcyBuYW1lcy5cbiAqL1xuXG5leHBvcnQgdHlwZSBWYXJpYW50Q29uZmlnID0ge1xuICBiYXNlPzogc3RyaW5nO1xuICB2YXJpYW50cz86IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+O1xuICBjb21wb3VuZFZhcmlhbnRzPzogQXJyYXk8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT47XG4gIGRlZmF1bHRWYXJpYW50cz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIG1lZGlhUXVlcmllcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIGdsb2JhbFN0eWxlcz86IHN0cmluZztcbiAgY3VzdG9tVXRpbGl0aWVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcbn07XG5cbmNvbnN0IHZ4ID0gKGNvbmZpZzogVmFyaWFudENvbmZpZywgcHJlZml4OiBzdHJpbmcgPSAndG11aScpID0+IHtcbiAgY29uc3Qge1xuICAgIGJhc2UgPSAnJyxcbiAgICB2YXJpYW50cyA9IHt9LFxuICAgIGNvbXBvdW5kVmFyaWFudHMgPSBbXSxcbiAgICBkZWZhdWx0VmFyaWFudHMgPSB7fSxcbiAgICBtZWRpYVF1ZXJpZXMgPSB7fSxcbiAgICBnbG9iYWxTdHlsZXMgPSAnJyxcbiAgICBjdXN0b21VdGlsaXRpZXMgPSB7fSxcbiAgfSA9IGNvbmZpZztcblxuICByZXR1cm4gKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHtcbiAgICBjb25zdCB7IC4uLnByb3ZpZGVkVmFyaWFudHMgfSA9IG9wdGlvbnM7XG5cbiAgICBsZXQgcmVzdWx0ID0gYCR7cHJlZml4fS0ke2Jhc2V9YDsgLy8gUHJlZml4IHRoZSBiYXNlIGNsYXNzXG5cbiAgICBPYmplY3QuZW50cmllcyhwcm92aWRlZFZhcmlhbnRzKS5mb3JFYWNoKChbdmFyaWFudCwgdmFsdWVdKSA9PiB7XG4gICAgICBpZiAodmFyaWFudHNbdmFyaWFudF0gJiYgdmFyaWFudHNbdmFyaWFudF1bdmFsdWVdKSB7XG4gICAgICAgIHJlc3VsdCArPSBgICR7cHJlZml4fS0ke3ZhcmlhbnRzW3ZhcmlhbnRdW3ZhbHVlXX1gO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29tcG91bmRWYXJpYW50cy5mb3JFYWNoKChjb21wb3VuZFZhcmlhbnQpID0+IHtcbiAgICAgIGNvbnN0IHNob3VsZEFwcGx5ID0gT2JqZWN0LmVudHJpZXMoY29tcG91bmRWYXJpYW50KS5ldmVyeShcbiAgICAgICAgKFt2YXJpYW50LCB2YWx1ZV0pID0+IHByb3ZpZGVkVmFyaWFudHNbdmFyaWFudF0gPT09IHZhbHVlXG4gICAgICApO1xuXG4gICAgICBpZiAoc2hvdWxkQXBwbHkpIHtcbiAgICAgICAgcmVzdWx0ICs9IGAgJHtwcmVmaXh9LSR7Y29tcG91bmRWYXJpYW50LmNsYXNzfWA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhkZWZhdWx0VmFyaWFudHMpLmZvckVhY2goKFt2YXJpYW50LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmICghcHJvdmlkZWRWYXJpYW50c1t2YXJpYW50XSkge1xuICAgICAgICByZXN1bHQgKz0gYCAke3ByZWZpeH0tJHt2YXJpYW50c1t2YXJpYW50XVt2YWx1ZV19YDtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKG1lZGlhUXVlcmllcykuZm9yRWFjaCgoW3F1ZXJ5LCBzdHlsZXNdKSA9PiB7XG4gICAgICByZXN1bHQgKz0gYCAke3ByZWZpeH0tJHtxdWVyeX17JHtzdHlsZXN9fWA7XG4gICAgfSk7XG5cbiAgICByZXN1bHQgKz0gYCAke3ByZWZpeH0tJHtnbG9iYWxTdHlsZXN9YDtcblxuICAgIE9iamVjdC5lbnRyaWVzKGN1c3RvbVV0aWxpdGllcykuZm9yRWFjaCgoW3V0aWxpdHksIHN0eWxlc10pID0+IHtcbiAgICAgIHJlc3VsdCArPSBgICR7cHJlZml4fS0ke3V0aWxpdHl9eyR7c3R5bGVzfX1gO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdC50cmltKCk7XG4gIH07XG59O1xuXG5leHBvcnQgeyB2eCB9Il19