export type Point = {
    x: number;
    y: number;
};
export type DocumentCorners = {
    bottomLeft: Point;
    bottomRight: Point;
    topLeft: Point;
    topRight: Point;
};
export type DocumentEdgeData = {
    confidence: number;
    corners: DocumentCorners | null;
    detected: boolean;
};
export declare const useDocumentEdgeDetection: () => {
    analyzeDocumentEdges: (base64Image: string) => Promise<DocumentEdgeData | null>;
};
//# sourceMappingURL=useDocumentEdgeDetection.d.ts.map