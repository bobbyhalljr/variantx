"use strict";
// useVariantX.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.useVariantX = void 0;
/**
 * A React hook that provides dynamic class generation based
 * on a configuration using the VariantX utility.
 * @param config - The configuration object specifying base,
 * variants, compoundVariants, defaultVariants, mediaQueries, globalStyles,
 * and customUtilities.
 * @returns An object with the current dynamic class and a function to
 * update it with new options.
 *
 * @example
 * ```tsx
 * // Example usage in a component:
 * const { dynamicClass, updateDynamicClass } = useVariantX(componentConfig);
 *
 * // Update dynamic class when props change
 * React.useEffect(() => {
 *   updateDynamicClass({ color: 'red', size: 'large' });
 * }, []);
 *
 * // Render component with dynamic class
 * return <div className={dynamicClass}>Your content goes here</div>;
 * ```
 *
 * @table
 * | Parameter | Type            | Description                                                                                   |
 * |-----------|-----------------|-----------------------------------------------------------------------------------------------|
 * | config    | `VariantConfig` | The configuration object specifying base, variants, compoundVariants, defaultVariants, mediaQueries, globalStyles, and customUtilities. |
 * | Returns   | `Object`        | An object with the current dynamic class and a function to update it with new options.        |
 *
 * @table
 * | Method                  | Type                                 | Description                                  |
 * |-------------------------|--------------------------------------|----------------------------------------------|
 * | dynamicClass            | `string`                             | The current dynamically generated class.     |
 * | updateDynamicClass      | `(options: Record<string, string>) => void` | A function to update the dynamic class based on new options. |
 */
var react_1 = require("react");
var variantx_1 = require("../variantx");
var useVariantX = function (config) {
    var _a = (0, react_1.useState)(''), dynamicClass = _a[0], setDynamicClass = _a[1];
    (0, react_1.useEffect)(function () {
        var generateClass = (0, variantx_1.vx)(config);
        setDynamicClass(generateClass({})); // Initialize with default props
    }, [config]);
    var updateDynamicClass = function (options) {
        var generateClass = (0, variantx_1.vx)(config);
        setDynamicClass(generateClass(options));
    };
    return { dynamicClass: dynamicClass, updateDynamicClass: updateDynamicClass };
};
exports.useVariantX = useVariantX;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlVmFyaWFudHguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VWYXJpYW50eC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGlCQUFpQjs7O0FBRWpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0NHO0FBRUgsK0JBQTRDO0FBQzVDLHdDQUFnRDtBQUVoRCxJQUFNLFdBQVcsR0FBRyxVQUFDLE1BQXFCO0lBQ2xDLElBQUEsS0FBa0MsSUFBQSxnQkFBUSxFQUFTLEVBQUUsQ0FBQyxFQUFyRCxZQUFZLFFBQUEsRUFBRSxlQUFlLFFBQXdCLENBQUM7SUFFN0QsSUFBQSxpQkFBUyxFQUFDO1FBQ1IsSUFBTSxhQUFhLEdBQUcsSUFBQSxhQUFFLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0NBQWdDO0lBQ3RFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFYixJQUFNLGtCQUFrQixHQUFHLFVBQUMsT0FBK0I7UUFDekQsSUFBTSxhQUFhLEdBQUcsSUFBQSxhQUFFLEVBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQztJQUVGLE9BQU8sRUFBRSxZQUFZLGNBQUEsRUFBRSxrQkFBa0Isb0JBQUEsRUFBRSxDQUFDO0FBQzlDLENBQUMsQ0FBQztBQUVPLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlVmFyaWFudFgudHNcblxuLyoqXG4gKiBBIFJlYWN0IGhvb2sgdGhhdCBwcm92aWRlcyBkeW5hbWljIGNsYXNzIGdlbmVyYXRpb24gYmFzZWRcbiAqIG9uIGEgY29uZmlndXJhdGlvbiB1c2luZyB0aGUgVmFyaWFudFggdXRpbGl0eS5cbiAqIEBwYXJhbSBjb25maWcgLSBUaGUgY29uZmlndXJhdGlvbiBvYmplY3Qgc3BlY2lmeWluZyBiYXNlLFxuICogdmFyaWFudHMsIGNvbXBvdW5kVmFyaWFudHMsIGRlZmF1bHRWYXJpYW50cywgbWVkaWFRdWVyaWVzLCBnbG9iYWxTdHlsZXMsIFxuICogYW5kIGN1c3RvbVV0aWxpdGllcy5cbiAqIEByZXR1cm5zIEFuIG9iamVjdCB3aXRoIHRoZSBjdXJyZW50IGR5bmFtaWMgY2xhc3MgYW5kIGEgZnVuY3Rpb24gdG9cbiAqIHVwZGF0ZSBpdCB3aXRoIG5ldyBvcHRpb25zLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGB0c3hcbiAqIC8vIEV4YW1wbGUgdXNhZ2UgaW4gYSBjb21wb25lbnQ6XG4gKiBjb25zdCB7IGR5bmFtaWNDbGFzcywgdXBkYXRlRHluYW1pY0NsYXNzIH0gPSB1c2VWYXJpYW50WChjb21wb25lbnRDb25maWcpO1xuICogXG4gKiAvLyBVcGRhdGUgZHluYW1pYyBjbGFzcyB3aGVuIHByb3BzIGNoYW5nZVxuICogUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAqICAgdXBkYXRlRHluYW1pY0NsYXNzKHsgY29sb3I6ICdyZWQnLCBzaXplOiAnbGFyZ2UnIH0pO1xuICogfSwgW10pO1xuICogXG4gKiAvLyBSZW5kZXIgY29tcG9uZW50IHdpdGggZHluYW1pYyBjbGFzc1xuICogcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtkeW5hbWljQ2xhc3N9PllvdXIgY29udGVudCBnb2VzIGhlcmU8L2Rpdj47XG4gKiBgYGBcbiAqXG4gKiBAdGFibGVcbiAqIHwgUGFyYW1ldGVyIHwgVHlwZSAgICAgICAgICAgIHwgRGVzY3JpcHRpb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgY29uZmlnICAgIHwgYFZhcmlhbnRDb25maWdgIHwgVGhlIGNvbmZpZ3VyYXRpb24gb2JqZWN0IHNwZWNpZnlpbmcgYmFzZSwgdmFyaWFudHMsIGNvbXBvdW5kVmFyaWFudHMsIGRlZmF1bHRWYXJpYW50cywgbWVkaWFRdWVyaWVzLCBnbG9iYWxTdHlsZXMsIGFuZCBjdXN0b21VdGlsaXRpZXMuIHxcbiAqIHwgUmV0dXJucyAgIHwgYE9iamVjdGAgICAgICAgIHwgQW4gb2JqZWN0IHdpdGggdGhlIGN1cnJlbnQgZHluYW1pYyBjbGFzcyBhbmQgYSBmdW5jdGlvbiB0byB1cGRhdGUgaXQgd2l0aCBuZXcgb3B0aW9ucy4gICAgICAgIHxcbiAqXG4gKiBAdGFibGVcbiAqIHwgTWV0aG9kICAgICAgICAgICAgICAgICAgfCBUeXBlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCBkeW5hbWljQ2xhc3MgICAgICAgICAgICB8IGBzdHJpbmdgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRoZSBjdXJyZW50IGR5bmFtaWNhbGx5IGdlbmVyYXRlZCBjbGFzcy4gICAgIHxcbiAqIHwgdXBkYXRlRHluYW1pY0NsYXNzICAgICAgfCBgKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHZvaWRgIHwgQSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGR5bmFtaWMgY2xhc3MgYmFzZWQgb24gbmV3IG9wdGlvbnMuIHxcbiAqL1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdngsIFZhcmlhbnRDb25maWcgfSBmcm9tICcuLi92YXJpYW50eCc7XG5cbmNvbnN0IHVzZVZhcmlhbnRYID0gKGNvbmZpZzogVmFyaWFudENvbmZpZykgPT4ge1xuICBjb25zdCBbZHluYW1pY0NsYXNzLCBzZXREeW5hbWljQ2xhc3NdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZW5lcmF0ZUNsYXNzID0gdngoY29uZmlnKTtcbiAgICBzZXREeW5hbWljQ2xhc3MoZ2VuZXJhdGVDbGFzcyh7fSkpOyAvLyBJbml0aWFsaXplIHdpdGggZGVmYXVsdCBwcm9wc1xuICB9LCBbY29uZmlnXSk7XG5cbiAgY29uc3QgdXBkYXRlRHluYW1pY0NsYXNzID0gKG9wdGlvbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pID0+IHtcbiAgICBjb25zdCBnZW5lcmF0ZUNsYXNzID0gdngoY29uZmlnKTtcbiAgICBzZXREeW5hbWljQ2xhc3MoZ2VuZXJhdGVDbGFzcyhvcHRpb25zKSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgZHluYW1pY0NsYXNzLCB1cGRhdGVEeW5hbWljQ2xhc3MgfTtcbn07XG5cbmV4cG9ydCB7IHVzZVZhcmlhbnRYIH0iXX0=